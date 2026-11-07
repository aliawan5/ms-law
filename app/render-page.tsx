import { renderToString } from "react-dom/server";
import { resolvePage, App, SOCIAL_IMAGE } from "./site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const json = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

/** Build-time HTML for one page: the rendered body plus every head tag search engines and link previews read. */
export function renderPage(path: string) {
 (globalThis as { __MS_PATH__?: string }).__MS_PATH__ = path;
 const page = resolvePage(path);
 const body = renderToString(<App page={page} />);
 const head = [
  `<title>${esc(page.title)}</title>`,
  `<meta name="description" content="${esc(page.description)}" />`,
  `<meta property="og:title" content="${esc(page.title)}" />`,
  `<meta property="og:description" content="${esc(page.description)}" />`,
  `<meta property="og:image" content="${SOCIAL_IMAGE}" />`,
  `<meta name="twitter:card" content="summary" />`,
  ...(page.canonical ? [`<link rel="canonical" href="${page.canonical}" />`, `<meta property="og:url" content="${page.canonical}" />`] : []),
  ...page.schemas.map(([id, schema]) => `<script id="${id}" type="application/ld+json">${json(schema)}</script>`),
 ];
 return { body, head: head.join("\n    "), htmlClass: page.htmlClass, notFound: Boolean(page.notFound) };
}
