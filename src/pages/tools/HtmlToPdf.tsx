import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Upload,
  Code2,
  Eye,
  Download,
  Loader2,
  X,
  Info,
} from "lucide-react";

// Animated stacked-pages illustration for the preview empty state
const FlippingPages = ({ hasContent }: { hasContent: boolean }) => (
  <div className="relative w-16 h-[84px] mx-auto" style={{ perspective: "500px" }}>
    {/* Page 3 — back */}
    <div
      className="absolute rounded-[3px] border border-border bg-muted/50"
      style={{ inset: 0, transform: "translateX(8px) translateY(6px)" }}
    />
    {/* Page 2 — middle */}
    <div
      className="absolute rounded-[3px] border border-border bg-muted/70"
      style={{ inset: 0, transform: "translateX(4px) translateY(3px)" }}
    />
    {/* Page 1 — front, flipping */}
    <motion.div
      className={`absolute inset-0 rounded-[3px] border origin-bottom ${
        hasContent
          ? "bg-primary/10 border-primary/30"
          : "bg-muted border-border"
      }`}
      animate={{ rotateX: [0, -28, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
    >
      <div className="p-2 pt-3 space-y-[5px]">
        <div
          className={`h-[3px] rounded-full ${hasContent ? "bg-primary/50" : "bg-muted-foreground/25"}`}
          style={{ width: "75%" }}
        />
        <div
          className={`h-[3px] rounded-full ${hasContent ? "bg-primary/35" : "bg-muted-foreground/20"}`}
          style={{ width: "55%" }}
        />
        <div
          className={`h-[3px] rounded-full ${hasContent ? "bg-primary/35" : "bg-muted-foreground/20"}`}
          style={{ width: "65%" }}
        />
        <div
          className={`h-[3px] rounded-full ${hasContent ? "bg-primary/20" : "bg-muted-foreground/15"}`}
          style={{ width: "45%" }}
        />
      </div>
    </motion.div>
  </div>
);

type Mode = "paste" | "upload";

const PLACEHOLDER_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sample Document</title>
  <style>
    body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; color: #1a1a1a; }
    h1   { color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 8px; }
    p    { line-height: 1.7; }
    table{ width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th,td{ border: 1px solid #d1d5db; padding: 8px 12px; text-align: left; }
    th   { background: #1e40af; color: white; }
    tr:nth-child(even) { background: #f3f4f6; }
  </style>
</head>
<body>
  <h1>Sample Report</h1>
  <p>This is sample content demonstrating HTML → A4 PDF conversion with full style retention.</p>
  <table>
    <thead><tr><th>Name</th><th>Value</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Item A</td><td>1,200</td><td>✅ Active</td></tr>
      <tr><td>Item B</td><td>850</td><td>✅ Active</td></tr>
      <tr><td>Item C</td><td>430</td><td>⚠️ Pending</td></tr>
    </tbody>
  </table>
</body>
</html>`;

const HtmlToPdf = () => {
  const [mode, setMode] = useState<Mode>("paste");
  const [htmlCode, setHtmlCode] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewHtml, setPreviewHtml] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Preview logic ──────────────────────────────────────────────────────────
  const currentPreview = mode === "paste" ? htmlCode : previewHtml;
  const hasContent = mode === "paste" ? htmlCode.trim().length > 0 : file !== null;

  // ── File handling ──────────────────────────────────────────────────────────
  const readFile = useCallback((f: File) => {
    if (!f.name.endsWith(".html") && f.type !== "text/html") {
      toast.error("Only .html files are supported.");
      return;
    }
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewHtml((e.target?.result as string) ?? "");
      setShowPreview(true); // auto-open preview when file is loaded
    };
    reader.readAsText(f);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) readFile(f);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) readFile(f);
  };

  const clearFile = () => {
    setFile(null);
    setPreviewHtml("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // ── Convert ────────────────────────────────────────────────────────────────
  const handleConvert = async () => {
    if (!hasContent) {
      toast.error("Please provide some HTML content first.");
      return;
    }

    setIsConverting(true);
    const toastId = toast.loading("Converting HTML → PDF…");

    try {
      let response: Response;

      if (mode === "paste") {
        response = await fetch("/api/convert-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ html: htmlCode }),
        });
      } else {
        const form = new FormData();
        form.append("file", file!);
        response = await fetch("/api/convert-pdf", {
          method: "POST",
          body: form,
        });
      }

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: "Conversion failed." }));
        throw new Error(err.error ?? "Conversion failed.");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const filename =
        mode === "upload" && file
          ? file.name.replace(/\.html?$/i, ".pdf")
          : "converted.pdf";

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
      URL.revokeObjectURL(url);

      toast.success("PDF downloaded!", { id: toastId });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg, { id: toastId });
    } finally {
      setIsConverting(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <ScrollReveal>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>

            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    HTML → PDF Converter
                  </h1>
                </div>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Paste raw HTML or upload an <code className="bg-muted px-1 rounded text-xs">.html</code> file.
                  The converter uses Playwright Chromium to render an A4 PDF with your styles faithfully preserved.
                </p>
              </div>

              <Button
                onClick={handleConvert}
                disabled={isConverting || !hasContent}
                size="lg"
                className="btn-primary rounded-full"
              >
                {isConverting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Converting…
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Convert to PDF
                  </>
                )}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-background min-h-[70vh]">
        <div className="container-custom">
          <ScrollReveal>
            {/* Mode Tabs */}
            <div className="flex items-center gap-1 bg-muted rounded-xl p-1 w-fit mb-6">
              <button
                onClick={() => setMode("paste")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  mode === "paste"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code2 className="w-4 h-4" />
                Paste HTML
              </button>
              <button
                onClick={() => setMode("upload")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  mode === "upload"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Upload className="w-4 h-4" />
                Upload File
              </button>
            </div>

            {/* Two-panel layout */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* ── Left: Input ── */}
              <div className="flex flex-col gap-4">
                {mode === "paste" ? (
                  <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col flex-1">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        HTML Source
                      </span>
                      <button
                        onClick={() => { setHtmlCode(PLACEHOLDER_HTML); setShowPreview(true); }}
                        className="text-xs text-primary hover:underline transition-colors"
                      >
                        Load example
                      </button>
                    </div>
                    <textarea
                      value={htmlCode}
                      onChange={(e) => setHtmlCode(e.target.value)}
                      placeholder="Paste your HTML here…"
                      className="flex-1 w-full min-h-[460px] p-4 bg-transparent text-foreground text-xs font-mono resize-none focus:outline-none placeholder:text-muted-foreground/50"
                      spellCheck={false}
                    />
                    {htmlCode && (
                      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/20">
                        <span className="text-xs text-muted-foreground">
                          {htmlCode.length.toLocaleString()} characters
                        </span>
                        <button
                          onClick={() => setHtmlCode("")}
                          className="text-xs text-destructive hover:underline transition-colors"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Upload dropzone */
                  <div>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative flex flex-col items-center justify-center gap-4 min-h-[200px] rounded-2xl border-2 border-dashed cursor-pointer transition-all ${
                        isDragging
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/40 hover:bg-muted/30"
                      }`}
                    >
                      <Upload
                        className={`w-10 h-10 transition-colors ${
                          isDragging ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">
                          {isDragging ? "Drop your file here" : "Click or drag & drop an HTML file"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Accepts .html files up to 20 MB
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".html,text/html"
                        className="hidden"
                        onChange={handleFileInput}
                      />
                    </div>

                    {/* File info card */}
                    {file && (
                      <div className="mt-4 flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={clearFile}
                          className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Info note */}
                <div className="flex items-start gap-3 bg-muted/30 border border-border rounded-xl p-4 text-xs text-muted-foreground">
                  <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    External images and fonts load only if referenced by absolute URLs.
                    Inline styles and{" "}
                    <code className="bg-muted px-1 rounded">&lt;style&gt;</code> blocks are
                    always preserved.
                  </span>
                </div>
              </div>

              {/* ── Right: Preview ── */}
              <div className="flex flex-col gap-4">
                <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col flex-1">
                  {/* Preview header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Live Preview
                      </span>
                    </div>
                    {showPreview && currentPreview && (
                      <button
                        onClick={() => setShowPreview(false)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-3 h-3" />
                        Close
                      </button>
                    )}
                  </div>

                  {showPreview && currentPreview ? (
                    <iframe
                      srcDoc={currentPreview}
                      title="HTML Preview"
                      className="w-full flex-1 border-0"
                      style={{ minHeight: "460px" }}
                      sandbox="allow-same-origin allow-scripts allow-forms"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center flex-1 min-h-[460px] gap-5 text-center px-8">
                      {/* Animated pages illustration */}
                      <FlippingPages hasContent={!!currentPreview} />

                      {/* Text */}
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-foreground">
                          {currentPreview ? "Ready to preview" : "No content yet"}
                        </p>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                          {currentPreview
                            ? "See exactly how your HTML will look before converting to PDF"
                            : "Paste HTML or upload a file on the left"}
                        </p>
                      </div>

                      {/* CTA */}
                      {currentPreview ? (
                        <Button
                          onClick={() => setShowPreview(true)}
                          size="lg"
                          className="btn-primary rounded-full px-8 shadow-md"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Show Preview
                        </Button>
                      ) : mode === "paste" && (
                        <button
                          onClick={() => { setHtmlCode(PLACEHOLDER_HTML); setShowPreview(true); }}
                          className="text-sm text-primary hover:underline transition-colors font-medium"
                        >
                          Try with example →
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Convert button (repeated below preview for easy access) */}
                <Button
                  onClick={handleConvert}
                  disabled={isConverting || !hasContent}
                  size="lg"
                  className="btn-primary rounded-full w-full"
                >
                  {isConverting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating PDF…
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download A4 PDF
                    </>
                  )}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default HtmlToPdf;
