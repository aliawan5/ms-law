import type { ComponentProps } from "react";

// Standard document navigation keeps this editorial, multi-page site reliable
// across browsers and works even before client JavaScript has hydrated.
export default function Link(props: ComponentProps<"a">) {
  return <a {...props} />;
}
