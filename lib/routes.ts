import { services } from "./content";
export const pagePaths = ["/", "/about", "/our-team", "/services", "/insights-and-media", "/contact", "/privacy", ...services.map(service => `/services/${service.slug}`)];
export function currentPath() {
  return window.location.pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
}
