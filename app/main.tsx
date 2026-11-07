import { createRoot, hydrateRoot } from "react-dom/client";
import { currentPath } from "@/lib/routes";
import { resolvePage, App, SOCIAL_IMAGE } from "./site";
import "./brand.css";

const page = resolvePage(currentPath());

/* Head tags. Every page is prerendered with these already in place (scripts/prerender.mjs);
   this keeps them correct when a page is opened from a host's fallback copy of another page. */
const head = document.head;
const meta = (attr: "name" | "property", key: string, content: string) => {
  let tag = head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, key); head.append(tag); }
  tag.content = content;
};
document.documentElement.className = page.htmlClass;
document.title = page.title;
meta("name", "description", page.description);
meta("property", "og:title", page.title);
meta("property", "og:description", page.description);
meta("property", "og:image", SOCIAL_IMAGE);
let canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
if (page.canonical) {
  if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; head.append(canonical); }
  canonical.href = page.canonical;
  meta("property", "og:url", page.canonical);
} else {
  canonical?.remove();
  head.querySelector('meta[property="og:url"]')?.remove();
}
const wanted = new Set(page.schemas.map(([id]) => id));
head.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach(tag => { if (!wanted.has(tag.id)) tag.remove(); });
for (const [id, schema] of page.schemas) {
  const tag = head.querySelector<HTMLScriptElement>(`#${id}`) ?? document.createElement("script");
  tag.id = id; tag.type = "application/ld+json"; tag.textContent = JSON.stringify(schema);
  head.append(tag);
}

const root = document.getElementById("root")!;
// Use the prerendered HTML when it is for this page; otherwise render from scratch.
if (root.hasChildNodes() && root.dataset.path === page.path) hydrateRoot(root, <App page={page} />);
else { root.textContent = ""; createRoot(root).render(<App page={page} />); }
