import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

// Only animate client-side navigations, never the first page load
let hasNavigated = false;

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  // Decided once per page mount; effects don't run on the server, so prerendered HTML never animates
  const [animateIn] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <div key={location.pathname} className={animateIn ? "animate-page-in" : undefined}>
      {children}
    </div>
  );
};
