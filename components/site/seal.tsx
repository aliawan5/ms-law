import { useId } from "react";
import type { LucideIcon } from "lucide-react";

const sealText = "MARIAM SALEEM · FOUNDER · MS LAW · ISLAMABAD · ";

/** Brand seal: the monogram (or a page icon) draws in while the ring text turns slowly. `light` is for white backgrounds. */
export function BrandSeal({ light = false, text, icon: Icon }: { light?: boolean; text?: string; icon?: LucideIcon }) {
 const path = useId().replace(/:/g, "");
 return <div className={`ms-seal${light ? " ms-seal-light" : ""}`} aria-hidden="true">
  <svg viewBox="0 0 400 400" fill="none">
   <defs><path id={path} d="M200 200m-162 0a162 162 0 1 1 324 0a162 162 0 1 1-324 0" /></defs>
   <circle className="ms-seal-ring ms-seal-ring-outer" cx="200" cy="200" r="198" pathLength={1} />
   {[0, 90, 180, 270].map(angle => <path key={angle} className="ms-seal-tick" d="M200 2v12" transform={`rotate(${angle} 200 200)`} />)}
   <g className="ms-seal-text"><text><textPath href={`#${path}`} textLength="1012" lengthAdjust="spacing">{text ?? sealText}</textPath></text></g>
   <circle className="ms-seal-ring ms-seal-ring-dashed" cx="200" cy="200" r="136" />
   <circle className="ms-seal-core" cx="200" cy="200" r="104" pathLength={1} />
   {!Icon && <g transform="translate(200 200) scale(4.2) translate(-23 -23)">
    <path className="ms-seal-draw" pathLength={1} d="M11 29V17l6.5 8 6.5-8v12" />
    <path className="ms-seal-draw ms-seal-s" pathLength={1} d="M35 18.5c-.8-1.4-2.3-2.2-4-2.2-2.3 0-3.9 1.3-3.9 3.1 0 4.2 8.3 2.4 8.3 6.6 0 1.9-1.7 3.4-4.2 3.4-1.9 0-3.5-.9-4.3-2.4" />
   </g>}
  </svg>
  {Icon && <span className="ms-seal-icon"><Icon strokeWidth={1.1} absoluteStrokeWidth={false} /></span>}
  <span className="ms-seal-caption">33.68° N · 73.04° E</span>
 </div>;
}
