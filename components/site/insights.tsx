import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mic, Newspaper, Play, Tv } from "lucide-react";
import { insightsArticles as articles, insightsMedia as media, insightsContent, environmentalArticles } from "@/lib/insights-content";
import { PageHero } from "./ui";
import { InsightsExplorer } from "./interactive";
import "@/app/pages/insights-contact.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function InsightsPage() {
 return <>
  <PageHero label="Insights & Media" title={insightsContent.heading} description={<>Analysis of Pakistan's virtual assets framework, stablecoins and the future of payments by <a href="/our-team/">Mariam Saleem</a>, Founder of MS Law, who writes a syndicated column for The News.</>} icon={Newspaper} sealText="INSIGHTS & MEDIA · COLUMNS · INTERVIEWS · MS LAW · " />
  <LeadStory />
  <section className="ms-section ms-screen ms-ins-archive" aria-labelledby="ins-archive-title">
   <div className="ms-wrap">
    <div className="ms-ins-archive-head" data-reveal>
     <div><span className="ms-kicker">Mariam Saleem</span><h2 id="ins-archive-title">Published <span className="ms-accent">Analysis</span></h2></div>
     <div className="ms-ins-newsletter">
      <h3>{insightsContent.newsletterHeading}</h3>
      <p>{insightsContent.newsletter}</p>
      <a href={insightsContent.newsletterUrl ?? insightsContent.linkedin} target="_blank" rel="noreferrer">{insightsContent.newsletterUrl ? "Subscribe on LinkedIn" : "View on LinkedIn"} <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
     </div>
    </div>
    <InsightsExplorer />
    <div className="ms-ins-other-writing" data-reveal>
     <h3>{insightsContent.otherWritingHeading}</h3>
     <ul className="ms-ins-cards">
      {environmentalArticles.map(article => <li key={article.url}>
       <a className="ms-ins-card" href={article.url} target="_blank" rel="noreferrer">
        <span className="ms-ins-card-thumb" aria-hidden="true"><img src={`/images/${article.image}`} alt="" /></span>
        <span className="ms-ins-card-text"><span className="ms-ins-card-meta">The News · <time>{article.date}</time></span><span className="ms-ins-card-title">{article.title}</span></span>
        <ArrowUpRight className="ms-ins-card-go" size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
       </a>
      </li>)}
     </ul>
    </div>
   </div>
  </section>
  <MediaReel />
 </>;
}

/** The latest column as a wide duotone banner; the image drifts gently as the page scrolls. */
function LeadStory() {
 const lead = articles[0];
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const el = ref.current;
  if (!el || reducedMotion()) return;
  let frame = 0;
  const update = () => {
   frame = 0;
   const r = el.getBoundingClientRect(), vh = window.innerHeight;
   const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)));
   el.style.setProperty("--ins-p", p.toFixed(4));
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  return () => { window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); cancelAnimationFrame(frame); };
 }, []);
 return <section className="ms-ins-lead ms-gap-after" aria-labelledby="ins-lead-title">
  <div className="ms-wrap">
   <article className="ms-ins-lead-card" ref={ref} data-reveal>
    <div className="ms-ins-lead-media" aria-hidden="true"><img src={`/images/${lead.image}`} alt="" /></div>
    <div className="ms-ins-lead-copy">
     <span className="ms-kicker ms-kicker-light" style={order(0)}>The latest column</span>
     <h2 id="ins-lead-title" style={order(1)}>{lead.title}</h2>
     <p className="ms-ins-lead-dek" style={order(2)}>{lead.description}</p>
     <div className="ms-ins-lead-foot" style={order(3)}>
      <p className="ms-ins-lead-meta">{lead.source}<i aria-hidden="true" /><time>{lead.date}</time></p>
      <a className="ms-btn ms-btn-light" href={lead.url} target="_blank" rel="noreferrer">Read article<span className="sr-only">: {lead.title} (opens in a new tab)</span> <ArrowUpRight size={17} aria-hidden="true" /></a>
     </div>
    </div>
   </article>
  </div>
 </section>;
}

/** Speaking and broadcast: a horizontal, snap-scrolling reel of recordings. */
function MediaReel() {
 const track = useRef<HTMLUListElement>(null);
 const [state, setState] = useState({ index: 0, start: true, end: false, progress: 0, visible: .5 });
 useEffect(() => {
  const el = track.current;
  if (!el) return;
  let frame = 0;
  const update = () => {
   frame = 0;
   const max = el.scrollWidth - el.clientWidth;
   const tiles = [...el.children] as HTMLElement[];
   const left = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).scrollPaddingLeft || "0");
   let index = 0, best = Infinity;
   tiles.forEach((t, i) => { const d = Math.abs(t.getBoundingClientRect().left - left); if (d < best) { best = d; index = i; } });
   if (max > 0 && el.scrollLeft >= max - 4) index = tiles.length - 1;
   setState({ index, start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4, progress: max > 0 ? el.scrollLeft / max : 1, visible: Math.min(1, el.clientWidth / el.scrollWidth) });
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  el.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  return () => { el.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); cancelAnimationFrame(frame); };
 }, []);
 const step = (dir: 1 | -1) => {
  const el = track.current;
  const tile = el?.children[0] as HTMLElement | undefined;
  if (!el || !tile) return;
  const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
  el.scrollBy({ left: dir * (tile.offsetWidth + gap), behavior: reducedMotion() ? "auto" : "smooth" });
 };
 const pad = (n: number) => String(n).padStart(2, "0");
 return <section className="ms-section ms-screen ms-ins-reel" aria-labelledby="ins-reel-title">
  <div className="ms-wrap ms-ins-reel-head" data-reveal>
   <div><span className="ms-kicker ms-kicker-light">Speaking & broadcast</span><h2 id="ins-reel-title">Television, Podcasts <span className="ms-accent">and Panels</span></h2></div>
   <div className="ms-ins-reel-side">
    <div className="ms-ins-reel-controls">
     <p className="ms-ins-reel-count" aria-hidden="true"><strong>{pad(state.index + 1)}</strong> / {pad(media.length)}</p>
     <div className="ms-ins-reel-buttons">
      <button type="button" onClick={() => step(-1)} disabled={state.start} aria-label="Previous appearance"><ArrowLeft size={18} /></button>
      <button type="button" onClick={() => step(1)} disabled={state.end} aria-label="Next appearance"><ArrowRight size={18} /></button>
     </div>
    </div>
   </div>
  </div>
  <ul className="ms-ins-reel-track" ref={track} data-reveal tabIndex={0} aria-label="Speaking and broadcast appearances, scrollable">
   {media.map((m, i) => {
    const Glyph = m.url ? Play : m.format === "Conference panel" ? Mic : Tv;
    const inner = <>
     <div className="ms-ins-tile-media">
      <img src={`/images/${m.image}`} alt="" />
      <span className="ms-ins-tile-format">{m.format}<span className="sr-only">: </span></span>
      <span className="ms-ins-tile-glyph" aria-hidden="true"><Glyph size={22} fill={m.url ? "currentColor" : "none"} strokeWidth={m.url ? 1.5 : 1.6} /></span>
     </div>
     <div className="ms-ins-tile-body">
      <p className="ms-ins-tile-meta">{m.outlet}{m.date && <><i aria-hidden="true" />{m.date}</>}</p>
      <h3>{m.title}</h3>
      {m.url
       ? <span className="ms-ins-tile-cta">Watch <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span>
       : <span className="ms-ins-tile-cta is-static">Recording available on request</span>}
     </div>
    </>;
    return <li key={m.title} style={order(i)}>
     {m.url ? <a className="ms-ins-tile" href={m.url} target="_blank" rel="noreferrer">{inner}</a> : <div className="ms-ins-tile is-static">{inner}</div>}
    </li>;
   })}
  </ul>
  <div className="ms-wrap ms-ins-reel-progress" aria-hidden="true"><span style={{ "--w": state.visible, "--x": state.progress } as CSSProperties} /></div>
 </section>;
}
