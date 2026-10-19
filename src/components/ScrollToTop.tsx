import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset scroll on route change (hash links like /#about are left alone)
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
