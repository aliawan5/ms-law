import { useEffect, useRef, type CSSProperties } from "react";
import Link from "./link";
import { HeroPillar } from "./hero-pillar";
import { ArrowUpRight } from "lucide-react";
import { Founder, Practice, Standing, Media, Approach, Testimonials, Faq } from "./home-premium";
import { hero } from "@/lib/home-content";
import { ActivityBrief } from "./activity-brief";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function HomePage() {
 return <>
  <Hero />
  <Founder />
  <Practice />
  <Standing />
  <Media />
  <Approach />
  <Testimonials />
  <Faq />
 </>;
}

/* Home hero: the ledger pillar builds itself with its annotation cards, a brass light sweeps across the
   headline once, and as the page scrolls the copy lifts away while the pillar drifts up. */
function Hero() {
 const ref = useRef<HTMLElement>(null);
 useEffect(() => {
  const el = ref.current;
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let frame = 0, last = "";
  // Only write when the value changes: once the hero is scrolled past it stays at 1 and costs nothing.
  const update = () => { frame = 0; const next = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight)).toFixed(3); if (next !== last) { last = next; el.style.setProperty("--sp", next); } };
  const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  window.addEventListener("scroll", queue, { passive: true });
  return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", queue); };
 }, []);
 return <section className="ms-hero" ref={ref}>
  <span className="ms-hero-glow" aria-hidden="true" />
  <div className="ms-wrap ms-hero-inner">
   <div className="ms-hero-copy">
    <h1>
     <span className="ms-line"><span className="ms-sweep" style={delay(.15)}>Crypto and <span className="ms-hero-mark">Virtual Assets<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 17C70 7 170 3 296 11" pathLength={1} /></svg></span> </span></span>
     <span className="ms-line"><span className="ms-sweep" style={delay(.28)}>Lawyers in Pakistan</span></span>
    </h1>
    <p className="ms-hero-fade" style={delay(.55)}>{hero.body}</p>
    <div className="ms-hero-actions ms-hero-fade" style={delay(.8)}>
     <Link className="ms-btn ms-btn-sand" href="/contact/">{hero.consultation} <ArrowUpRight size={17} /></Link>
     <ActivityBrief />
    </div>
   </div>
   <HeroPillar />
  </div>
 </section>;
}
