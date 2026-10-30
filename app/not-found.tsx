import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import "@/app/pages/team-privacy-404.css";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
const links = [["/services", "Services"], ["/insights-and-media", "Insights & Media"], ["/contact", "Contact"]] as const;

export default function NotFound() {
 return <section className="ms-gap-after ms-404" aria-labelledby="not-found-title">
  <div className="ms-wrap ms-404-inner">
   <div className="ms-404-numeral" aria-hidden="true">
    {["4", "0", "4"].map((digit, n) => <span key={n} className="ms-404-digit"><span style={d(.1 + n * .12)}>{digit}</span></span>)}
   </div>
   <span className="ms-kicker ms-404-fade" style={d(.45)}>A different direction</span>
   <h1 id="not-found-title" className="ms-404-fade" style={d(.55)}>Page not found</h1>
   <p className="ms-404-fade" style={d(.65)}>The page you’re looking for doesn’t exist or may have moved.</p>
   <div className="ms-404-actions ms-404-fade" style={d(.8)}>
    <a className="ms-btn ms-btn-dark" href="/">Return to the homepage <ArrowUpRight size={17} aria-hidden="true" /></a>
    <nav aria-label="Suggested pages">
     <ul>{links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
    </nav>
   </div>
  </div>
 </section>;
}
