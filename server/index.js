/**
 * HTML → A4 PDF Conversion Server
 * Uses Playwright Chromium for faithful style-preserving PDF generation.
 * Accepts: POST /api/convert-pdf
 *   - JSON body: { html: "<html>...</html>" }
 *   - OR multipart/form-data with field "file" (an .html file)
 */

import express from "express";
import multer from "multer";
import cors from "cors";
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: ["http://localhost:8080", "http://[::]:8080"] }));
app.use(express.json({ limit: "20mb" }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB max
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "text/html" || file.originalname.endsWith(".html")) {
      cb(null, true);
    } else {
      cb(new Error("Only .html files are accepted"));
    }
  },
});

// ─── Injected before print-media switch to lock in color rendering ────────────
const COLOR_CSS = `
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  color-adjust: exact !important;
}
`;

// ─── PDF layout CSS — screen-mode compatible (no @media print required) ──────
const PRINT_CSS = `
@page { size: A4; margin: 12mm 12mm 14mm 12mm; }

/*
 * Force ALL backgrounds, gradients and images to render.
 * background-attachment:scroll converts any fixed backgrounds so they
 * repeat/tile correctly across PDF pages instead of being clipped to the
 * first viewport.
 */
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  background-attachment: scroll !important;
}

body { margin: 0 !important; }

img, svg, canvas, video { max-width: 100% !important; height: auto !important; }
table { max-width: 100% !important; border-collapse: collapse !important; }
pre, code { white-space: pre-wrap !important; word-break: break-word !important; }

/* Avoid splitting key blocks mid-page */
h1, h2, h3, h4, h5, h6,
blockquote, figure, figcaption,
table, thead, tfoot, tr,
pre, code,
.card, .panel, .box, .widget,
article {
  break-inside: avoid !important;
  page-break-inside: avoid !important;
}

h1, h2, h3 { break-after: avoid !important; page-break-after: avoid !important; }

p, li { orphans: 3; widows: 3; }

.page-break  { break-before: page !important; page-break-before: always !important; }
.avoid-break { break-inside: avoid !important; page-break-inside: avoid !important; }
`;

// ─── Strip @media print blocks ────────────────────────────────────────────────
// Playwright's page.pdf() internally switches Chromium to print media, which
// fires any @media print rules present in the document — including common
// "ink-saving" rules like `body { background:white }` and
// `body::before { display:none }` that destroy decorative backgrounds.
// We remove those blocks entirely before loading the HTML so they never fire.
function stripPrintMediaQueries(html) {
  // Handles one level of nested braces — sufficient for all real-world cases.
  return html.replace(/@media\s+print\s*\{(?:[^{}]|\{[^{}]*\})*\}/gi, "");
}

// ─── PDF Conversion Route ─────────────────────────────────────────────────────
app.post("/api/convert-pdf", upload.single("file"), async (req, res) => {
  let html = "";

  try {
    if (req.file) {
      html = req.file.buffer.toString("utf-8");
    } else if (req.body?.html) {
      html = req.body.html;
    } else {
      return res.status(400).json({ error: "No HTML content provided." });
    }

    if (!html.trim()) {
      return res.status(400).json({ error: "HTML content is empty." });
    }

    // Remove @media print blocks so the document's own ink-saving rules
    // (white backgrounds, hidden decorations) cannot override the original design.
    html = stripPrintMediaQueries(html);

    console.log("🖨️  Converting HTML → PDF …");

    // --no-sandbox is required on Windows and most CI/server environments
    const browser = await chromium.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    let pdfBuffer;
    try {
      // 1050 px ≈ A4 content width at typical screen DPI — good default for print-intended HTML
      const context = await browser.newContext({
        deviceScaleFactor: 2,
        viewport: { width: 1050, height: 1485 }, // A4 aspect ratio
      });
      const page = await context.newPage();

      await page.setContent(html, { waitUntil: "load", timeout: 30000 });

      // Inject color-preservation CSS first so print-color-adjust is set
      // before Playwright switches to print context internally for pdf().
      // We deliberately do NOT call emulateMedia("print") — doing so would
      // activate any @media print rules inside the document that intentionally
      // strip backgrounds/colors for ink saving, destroying the original look.
      await page.addStyleTag({ content: COLOR_CSS });

      // Apply pagination & layout CSS (screen-mode compatible, no @media print)
      await page.addStyleTag({ content: PRINT_CSS });

      pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        scale: 1,
        preferCSSPageSize: false,
      });
    } finally {
      await browser.close();
    }

    console.log("✅ PDF ready, sending …");

    const buf = Buffer.isBuffer(pdfBuffer) ? pdfBuffer : Buffer.from(pdfBuffer);
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="converted.pdf"',
      "Content-Length": buf.length,
    });
    res.end(buf);
  } catch (err) {
    console.error("❌ PDF conversion failed:", err.stack ?? err.message);
    res.status(500).json({ error: err.message || "PDF conversion failed." });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`🚀 PDF server running → http://localhost:${PORT}`);
});
