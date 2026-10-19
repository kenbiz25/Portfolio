// Build-time prerender. Runs after `vite build`.
//
// For every public route:
//   - <div id="root"> markup comes from React's server renderer
//     (dist-ssr/entry-server.js), so the browser can hydrate it instead of
//     rendering the page twice;
//   - <head> tags (title, description, canonical, Open Graph, JSON-LD) are
//     taken from the same route rendered in headless Chromium, where the
//     useSeo hook has run.
// Crawlers, link previews and LLM agents that don't run JavaScript then see
// real content and per-page metadata.
//
//   /                -> dist/index.html
//   /portfolio       -> dist/portfolio.html
//   /portfolio/<id>  -> dist/portfolio/<id>.html
//
// public/.htaccess maps clean URLs onto these files. Routes are discovered by
// following internal links, so new case studies are picked up automatically.
//
// Also writes dist/sitemap.xml, dist/llms.txt (public/llms.txt + generated
// page list) and dist/llms-full.txt (full text of every page).
//
// If Chromium can't launch, it warns and leaves the plain SPA build in place.
import { createServer } from "node:http";

process.env.NODE_ENV ??= "production";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = "https://www.kenkiplagat.co.ke";
const SEED_ROUTES = ["/", "/portfolio", "/solutions", "/experience", "/contact", "/tools", "/tools/html-to-pdf", "/privacy", "/terms"];
const SKIP = [/^\/404/];

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".woff2": "font/woff2",
};

const template = await readFile(path.join(dist, "index.html"), "utf8");

let render;
try {
  ({ render } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href));
} catch (e) {
  console.warn(`[prerender] no SSR bundle (${e.message.split("\n")[0]}); pages will render on the client only.`);
}

// Static server: real files as-is, every route gets the untouched SPA template
const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(dist, urlPath);
  try {
    if (urlPath !== "/" && file.startsWith(dist) && (await stat(file)).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      return res.end(await readFile(file));
    }
  } catch {}
  res.writeHead(200, { "Content-Type": MIME[".html"] });
  res.end(template);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.warn("[prerender] playwright not installed; skipping prerender (SPA build still works).");
  server.close();
  process.exit(0);
}

let browser;
try {
  browser = await chromium.launch();
} catch (e) {
  console.warn(`[prerender] could not launch Chromium (${e.message.split("\n")[0]}). Run \`npx playwright install chromium\`. Skipping.`);
  server.close();
  process.exit(0);
}

const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// Only our own origin: no analytics, ads, fonts or remote images during render
await page.route("**/*", (route) => (route.request().url().startsWith(origin) ? route.continue() : route.abort()));

const queue = [...SEED_ROUTES];
const seen = new Set(queue);
const pages = [];

while (queue.length) {
  const route = queue.shift();
  await page.goto(origin + route, { waitUntil: "networkidle" });
  // Wait for the lazy route to render and the SEO hook to set the canonical
  await page.waitForFunction(
    (r) => document.querySelector("#root h1") && document.querySelector('link[rel="canonical"]')?.href.endsWith(r === "/" ? "/" : r),
    route,
    { timeout: 15000 },
  );
  await page.waitForTimeout(300);

  const ssrHtml = render ? await render(route) : null;
  const data = await page.evaluate(({ ssr, route }) => {
    const doc = document.documentElement.cloneNode(true);
    // Hydratable server markup (with Suspense markers) replaces the client-rendered DOM;
    // data-route tells the client which URL this markup belongs to
    if (ssr !== null) {
      doc.querySelector("#root").innerHTML = ssr;
      doc.querySelector("#root").setAttribute("data-route", route);
    }
    // Theme class is applied per visitor by the inline script in <head>
    doc.removeAttribute("class");
    doc.removeAttribute("style");
    // Client-only UI (e.g. cookie banner) renders after mount; keep the snapshot equal to the first render
    doc.querySelectorAll("[data-prerender-skip]").forEach((el) => el.remove());
    // Third-party scripts injected at runtime must not be baked into the HTML
    doc.querySelectorAll('script[src*="googletagmanager"], script[src*="googlesyndication"]').forEach((el) => el.remove());
    const main = document.querySelector("main");
    return {
      html: "<!doctype html>\n" + doc.outerHTML,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || "",
      noindex: (document.querySelector('meta[name="robots"]')?.content || "").includes("noindex"),
      text: (main?.innerText || document.body.innerText).replace(/\n{3,}/g, "\n\n").trim(),
      links: [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href").split(/[?#]/)[0]),
    };
  }, { ssr: ssrHtml, route });

  for (const link of data.links) {
    const clean = link.length > 1 ? link.replace(/\/$/, "") : link;
    if (!seen.has(clean) && !SKIP.some((re) => re.test(clean)) && !path.extname(clean)) {
      seen.add(clean);
      queue.push(clean);
    }
  }

  const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route}.html`);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, data.html);
  pages.push({ route, ...data });
  console.log(`[prerender] ${route}`);
}

await browser.close();
server.close();

const indexable = pages.filter((p) => !p.noindex);
const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === "/" ? "1.0" : r === "/portfolio" ? "0.9" : r.startsWith("/portfolio/") ? "0.8" : ["/privacy", "/terms"].includes(r) ? "0.3" : "0.7");

await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexable
      .map((p) => `  <url>\n    <loc>${SITE_URL}${p.route === "/" ? "/" : p.route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(p.route)}</priority>\n  </url>`)
      .join("\n") +
    "\n</urlset>\n",
);

// llms.txt: hand-written intro from public/llms.txt + generated page index
const intro = (await readFile(path.join(root, "public", "llms.txt"), "utf8")).trimEnd();
const line = (p) => `- [${p.title.replace(/ \| Keneth Kiplagat$/, "")}](${SITE_URL}${p.route === "/" ? "/" : p.route}): ${p.description}`;
const caseStudies = indexable.filter((p) => p.route.startsWith("/portfolio/"));
const mainPages = indexable.filter((p) => !p.route.startsWith("/portfolio/") && !["/privacy", "/terms", "/tools", "/tools/html-to-pdf"].includes(p.route));
const optional = indexable.filter((p) => ["/privacy", "/terms", "/tools", "/tools/html-to-pdf"].includes(p.route));
await writeFile(
  path.join(dist, "llms.txt"),
  `${intro}\n\n## Pages\n\n${mainPages.map(line).join("\n")}\n\n## Case studies\n\n${caseStudies.map(line).join("\n")}\n\n## Optional\n\n${optional.map(line).join("\n")}\n- [Full site text](${SITE_URL}/llms-full.txt): every page above as plain text\n`,
);

await writeFile(
  path.join(dist, "llms-full.txt"),
  `# Keneth Kiplagat: full site text\n\n> Plain-text version of every page on ${SITE_URL}, generated at build time (${today}).\n\n` +
    indexable.map((p) => `---\n\n# ${p.title}\n\nURL: ${SITE_URL}${p.route === "/" ? "/" : p.route}\n\n${p.text}\n`).join("\n"),
);

console.log(`[prerender] ${pages.length} pages, sitemap (${indexable.length} urls), llms.txt, llms-full.txt`);
