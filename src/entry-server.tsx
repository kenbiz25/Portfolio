// Server render used by scripts/prerender.mjs at build time (not shipped to browsers).
// renderToPipeableStream + onAllReady waits for lazy routes and emits the
// Suspense markers that hydrateRoot needs on the client.
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on("finish", () => resolve(html));

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>,
      {
        onAllReady: () => pipe(sink),
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
