import { useEffect, useRef, type CSSProperties } from "react";
import Link from "./link";
import { HeroPillar } from "./hero-pillar";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Practice, Standing, Media, Testimonials, Faq } from "./home-cards";
import { founder } from "@/lib/home-content";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function HomePage() {
 return <>
  <Hero />
  <Story />
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
  let frame = 0;
  const update = () => { frame = 0; el.style.setProperty("--sp", Math.min(1, Math.max(0, window.scrollY / el.offsetHeight)).toFixed(4)); };
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
     <span className="ms-line"><span className="ms-sweep" style={delay(.15)}>Clarity at the <span className="ms-hero-mark">frontier<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 17C70 7 170 3 296 11" pathLength={1} /></svg></span></span></span>
     <span className="ms-line"><span className="ms-sweep" style={delay(.28)}>of law and finance.</span></span>
    </h1>
    <p className="ms-hero-fade" style={delay(.55)}>Corporate, regulatory and transactional counsel,<br className="ms-br" /> now guiding global exchanges, investors and founders<br className="ms-br" /> through Pakistan’s digital economy.</p>
    <div className="ms-hero-actions ms-hero-fade" style={delay(.8)}>
     <Link className="ms-btn ms-btn-sand" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
     <a className="ms-link-light" href="#story">Read her story <ArrowDown size={16} /></a>
    </div>
   </div>
   <HeroPillar />
  </div>
 </section>;
}

// Milestones only; the founder paragraphs above carry the detail.
const chapters = [
 ["Foundation", "King’s College London"],
 ["Distinction", "Herbert Smith Prize"],
 ["Experience", "20+ years of corporate practice"],
 ["Today", "Founder, MS Law"],
] as const;

function Story() {
 return <section className="ms-section ms-screen ms-story" id="story">
  <div className="ms-wrap">
   <div className="ms-story-top">
    <figure className="ms-portrait" data-reveal="repeat">
     <div className="ms-portrait-frame">
      <img src="/images/mariam-saleem-ms-law.webp" alt={founder.alt} />
     </div>
     <figcaption><strong>Mariam Saleem</strong><span>Founder, MS Law</span></figcaption>
    </figure>
    <div className="ms-story-intro" data-reveal style={delay(.15)}>
     <span className="ms-kicker">Her story</span>
     <h2>Meet the <span className="ms-accent">Founder</span></h2>
     <h3 className="ms-story-name">Mariam Saleem, Founder</h3>
     {founder.paragraphs.map(p => <p key={p.slice(0, 20)}>{p}</p>)}
     <Link className="ms-link-dark" href="/our-team">Meet Our Team <ArrowUpRight size={16} /></Link>
    </div>
   </div>
   <ol className="ms-timeline" data-reveal="repeat">
    {chapters.map(([label, title], i) => <li key={label} style={{ "--i": i } as CSSProperties}>
     <span className="ms-timeline-dot" aria-hidden="true" />
     <span className="ms-timeline-label">0{i + 1} · {label}</span>
     <h3>{title}</h3>
    </li>)}
   </ol>
  </div>
 </section>;
}

/* The Understand / Connect / Advance cards are kept exactly as approved. The section pins
   for one screen while the cards slide up and stack; scroll position drives each card's --p. */
function Approach() {
 const ref = useRef<HTMLElement>(null);
 useEffect(() => {
  const section = ref.current; if (!section) return;
  const cards = [...section.querySelectorAll<HTMLElement>(".process-card")].slice(1);
  let frame = 0;
  const update = () => {
   frame = 0;
   const box = section.getBoundingClientRect();
   const progress = Math.min(1, Math.max(0, -box.top / Math.max(1, box.height - window.innerHeight)));
   cards.forEach((card, i) => card.style.setProperty("--p", Math.min(1, Math.max(0, (progress - .08 - i * .46) / .38)).toFixed(4)));
  };
  const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
  return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
 }, []);
 return <section className="approach-section ms-approach" ref={ref}><div className="ms-approach-stage"><div className="ms-wrap"><div className="approach-intro" data-reveal><span className="ms-kicker">Thoughtful by design</span><h2>Good counsel goes<br /><span className="ms-accent">beyond the answer.</span></h2><p>It is how we listen, how we think,<br/>and how we help you move forward.</p></div><div className="process-stack">
  {[["01","Understand.","Your business comes first.","We begin with your objectives, your operating context and the decision in front of you. The right legal question starts with a deeper understanding."],["02","Connect.","See the whole picture.","Commercial priorities, regulatory detail and cross-border implications belong in the same conversation. We consider how each informs the others."],["03","Advance.","Make the next step clear.","We turn considered analysis into practical advice, with an agreed scope and a clear view of the way forward."]].map(([n,title,sub,body],i)=><article className={`process-card process-${i}`} key={n}><div className="process-card-top"><span>THE MS LAW APPROACH</span><span>{n} / 03</span></div><div className="process-card-content"><div><h3>{title}</h3><h4>{sub}</h4><p>{body}</p></div><div className="process-number" aria-hidden="true">{n}<MoveUpRight strokeWidth={.75}/></div></div></article>)}
 </div></div></div></section>;
}
