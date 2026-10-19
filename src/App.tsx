import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { ScrollToTop } from "@/components/ScrollToTop";

import Index from "./pages/Index";

// Toasts are only used by the contact form and tools, so load them on demand
const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));

// Every other page is split into its own chunk so the home page stays light
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetail = lazy(() => import("./pages/projects/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Tools = lazy(() => import("./pages/Tools"));
const HtmlToPdf = lazy(() => import("./pages/tools/HtmlToPdf"));
const Solutions = lazy(() => import("./pages/Solutions"));

// Everything inside the router; the server prerender wraps it in a StaticRouter
export const AppContent = () => (
  <ThemeProvider>
    <Suspense fallback={null}>
      <Toaster />
    </Suspense>

    <ScrollToTop />
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/:projectId"
          element={<ProjectDetail />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/html-to-pdf" element={<HtmlToPdf />} />
        <Route path="/solutions" element={<Solutions />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </ThemeProvider>
);

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
