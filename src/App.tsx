import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { LoadingScreen } from "@/components/LoadingScreen";

import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/projects/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}

          <div
            className={
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300"
            }
          >
            <Toaster />
            <Sonner />

            <BrowserRouter>
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

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
