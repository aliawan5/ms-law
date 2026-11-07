import { services } from "./content";
import { homePractices } from "./home-content";

export const SITE_URL = "https://mariamsaleemlaw.com";
// Support the v2 document's service URLs alongside the existing service routes.
export const serviceAliases: Record<string, string> = Object.fromEntries(homePractices.map(s => [s.href.replace(/\/$/, ""), s.slug]));
/** The main (canonical) address of each practice page, e.g. /virtual-assets-regulation/. */
export const serviceHref = (slug: string) => homePractices.find(s => s.slug === slug)?.href ?? `/services/${slug}/`;
/** Pages listed in the sitemap: one canonical address per page. */
export const canonicalPaths = ["/", "/about", "/our-team", "/services", ...homePractices.map(s => s.href.replace(/\/$/, "")), "/insights-and-media", "/contact", "/privacy"];
/** Every address that serves a page (canonical addresses plus the older /services/<slug> ones). */
export const pagePaths = [...canonicalPaths, ...services.map(service => `/services/${service.slug}`)];

/** The current path without a trailing slash. During the build-time prerender there is no window,
 *  so the page being rendered is read from globalThis.__MS_PATH__. */
export function currentPath() {
  const raw = typeof window === "undefined" ? (globalThis as { __MS_PATH__?: string }).__MS_PATH__ ?? "/" : window.location.pathname;
  return raw.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
}
