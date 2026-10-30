import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { pagePaths } from "./lib/routes";

export default defineConfig({
  plugins: [react(), {
    name: "static-page-entries",
    enforce: "post",
    generateBundle(_, bundle) {
      const html = bundle["index.html"];
      if (!html || html.type !== "asset") return;
      // Direct page entry points for ordinary static hosting.
      for (const path of pagePaths.filter(path => path !== "/")) {
        this.emitFile({ type: "asset", fileName: path.slice(1) + "/index.html", source: html.source });
      }
      this.emitFile({ type: "asset", fileName: "404.html", source: html.source });
    },
  }],
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  server: { host: "127.0.0.1", port: 5173 },
  preview: { host: "127.0.0.1", port: 4173 },
});
