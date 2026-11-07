import type { ComponentProps } from "react";

// Standard document navigation keeps this editorial, multi-page site reliable
// across browsers and works even before client JavaScript has hydrated.
// Internal page links always use the canonical form with a trailing slash (/about/),
// so search engines never meet a redirect or a duplicate address.
const canonical = (href?: string) => {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return href;
  const match = href.match(/^([^?#]*)(.*)$/)!;
  const [path, rest] = [match[1], match[2]];
  if (path === "/" || path.endsWith("/") || /\.[a-z0-9]+$/i.test(path)) return href;
  return `${path}/${rest}`;
};
export default function Link({ href, ...props }: ComponentProps<"a">) {
  return <a href={canonical(href)} {...props} />;
}
