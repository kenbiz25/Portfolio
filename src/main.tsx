import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Pages are server-rendered at build time (scripts/prerender.mjs): hydrate
// that markup instead of throwing it away and rendering everything again.
// URLs without their own prerendered page (e.g. a 404) are served index.html,
// whose markup is for "/", so render those from scratch instead.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
if (container.hasChildNodes() && container.dataset.route === path) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
