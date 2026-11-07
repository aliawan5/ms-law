/**
 * Prerenders every page into dist/ so search engines, AI crawlers and link previews receive the
 * full text, title, description, canonical address and structured data without running JavaScript.
 * Also writes sitemap.xml and the 404 page.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true, watch: null }, appType: "custom" });
try {
 const { renderPage } = await server.ssrLoadModule("/app/render-page.tsx");
 const { pagePaths, canonicalPaths, SITE_URL } = await server.ssrLoadModule("/lib/routes.ts");
 const template = await readFile(resolve("dist/index.html"), "utf8");
 if (!template.includes('<div id="root"></div>')) throw new Error("Root placeholder is missing from dist/index.html.");

 // Strip the template's own home-page head tags; each page writes its own.
 const base = template
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta name="description"[^>]*>/, "")
  .replace(/\s*<meta property="og:(title|description)"[^>]*>/g, "")
  .replace(/\s*<noscript>[\s\S]*?<\/noscript>/, "");

 const build = (path) => {
  const { body, head, htmlClass } = renderPage(path);
  return base
   .replace('<html lang="en">', () => `<html lang="en"${htmlClass ? ` class="${htmlClass}"` : ""}>`)
   .replace("</head>", () => `    ${head}\n  </head>`)
   .replace('<div id="root"></div>', () => `<div id="root" data-path="${path}">${body}</div>`);
 };

 for (const path of pagePaths) {
  const file = resolve("dist", path === "/" ? "index.html" : `${path.slice(1)}/index.html`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, build(path));
 }
 await writeFile(resolve("dist/404.html"), build("/404"));

 const today = new Date().toISOString().slice(0, 10);
 const urls = canonicalPaths.map(path => `  <url><loc>${SITE_URL}${path === "/" ? "/" : `${path}/`}</loc><lastmod>${today}</lastmod></url>`);
 await writeFile(resolve("dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
 console.log(`Prerendered ${pagePaths.length} pages, 404.html and sitemap.xml (${canonicalPaths.length} URLs).`);
} finally {
 await server.close();
}
