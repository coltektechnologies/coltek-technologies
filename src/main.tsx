import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./App.tsx";

// After a new deploy, a visitor's browser may still hold an old index.html
// that references JS chunks which no longer exist on the server. Vite
// dispatches "vite:preloadError" when a dynamic import (e.g. a lazy-loaded
// page) fails for that reason. Reload once to fetch the fresh index.html
// and chunk names instead of leaving the page blank.
window.addEventListener("vite:preloadError", () => {
  const key = "coltek:reloaded-after-preload-error";
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, "1");
    window.location.reload();
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
