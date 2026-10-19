// Serve dist/ the way public/.htaccess does in production, for local checks:
//   real file -> as-is, /route -> route.html, anything else -> index.html
// Usage: npm run preview:prod  (PORT env var, default 4174)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT) || 4174;
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".woff2": "font/woff2",
};
const isFile = async (f) => f.startsWith(dist) && (await stat(f).then((s) => s.isFile(), () => false));

createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(dist, urlPath);
  if (!(await isFile(file))) {
    const page = path.join(dist, `${urlPath.replace(/\/+$/, "")}.html`);
    file = urlPath !== "/" && (await isFile(page)) ? page : path.join(dist, "index.html");
  }
  const ext = path.extname(file);
  let body = await readFile(file);
  const headers = {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": file.includes(`${path.sep}assets${path.sep}`) ? "public, max-age=31536000, immutable" : "no-cache",
  };
  if (/\.(html|js|css|svg|txt|xml|json)$/.test(ext) && /gzip/.test(req.headers["accept-encoding"] || "")) {
    body = gzipSync(body);
    headers["Content-Encoding"] = "gzip";
  }
  res.writeHead(200, headers);
  res.end(body);
}).listen(port, () => console.log(`dist served like production at http://localhost:${port}`));
