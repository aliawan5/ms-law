import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { BrandSeal } from "./seal";
/** Light inner-page hero: one full screen, plain white, with the brand seal on the right. */
export function PageHero({ label, title, italic, description, sealText, icon, children }: { label: string; title: string; italic?: string; description: string; sealText?: string; icon?: LucideIcon; children?: ReactNode }) {
 return <section className="ms-page-hero">
  <div className="ms-wrap ms-hero-inner">
   <div className="ms-hero-copy">
    <span className="ms-kicker ms-hero-fade" style={{ "--d": ".1s" } as CSSProperties}>{label}</span>
    <h1>
     <span className="ms-line"><span style={{ "--d": ".2s" } as CSSProperties}>{title}</span></span>
     {italic && <span className="ms-line"><span className="ms-accent" style={{ "--d": ".32s" } as CSSProperties}>{italic}</span></span>}
    </h1>
    <p className="ms-hero-fade" style={{ "--d": ".55s" } as CSSProperties}>{description}</p>
    {children && <div className="ms-hero-actions ms-hero-fade" style={{ "--d": ".75s" } as CSSProperties}>{children}</div>}
   </div>
   <BrandSeal light text={sealText} icon={icon} />
  </div>
 </section>;
}
