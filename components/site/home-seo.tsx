import { useEffect, useState, type CSSProperties } from "react";
import Link from "./link";
import { ArrowUpRight, FileCheck2, FlaskConical, BadgeCheck, Compass, Landmark, Globe, Building2, UserCheck, type LucideIcon } from "lucide-react";
import { articles } from "@/lib/content";
import { framework, whyUs, processSteps, latestInsights } from "@/lib/home-content";
import "@/app/pages/home.css";

const vars = (v: Record<string, string | number>) => v as CSSProperties;
const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- PVARA framework: a Schedule I register beside the three routes to authorisation ---------- */
const routeIcons: LucideIcon[] = [FileCheck2, FlaskConical, BadgeCheck];
export function Framework() {
 return <section className="ms-section ms-screen ms-gap-after ms-frame" aria-labelledby="frame-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">The framework</span><h2 id="frame-title">Pakistan’s Virtual Assets Framework <span className="ms-accent">at a Glance</span></h2></div>
    <p>{framework.intro[0]}</p>
   </div>
   <div className="ms-frame-grid">
    <div className="ms-schedule" data-reveal="repeat">
     <div className="ms-schedule-head">
      <span className="ms-schedule-tag">Schedule I</span>
      <p>{framework.intro[1]}</p>
     </div>
     <ol className="ms-schedule-list">
      {framework.activities.map((a, i) => <li key={a} style={vars({ "--i": i })}><span>{pad(i + 1)}</span>{a}</li>)}
     </ol>
    </div>
    <div className="ms-routes" data-reveal="repeat">
     <h3>{framework.routesHeading}</h3>
     <ul>
      {framework.routes.map(([name, body], i) => { const Icon = routeIcons[i]; return <li key={name} style={vars({ "--i": i })}>
       <span className="ms-route-icon"><Icon size={20} strokeWidth={1.6} /></span>
       <p><strong>{name}:</strong> {body}</p>
      </li>; })}
     </ul>
     <p className="ms-routes-note">{framework.foreign}</p>
     <Link className="ms-link-dark" href={framework.link[0]}>{framework.link[1]} <ArrowUpRight size={16} /></Link>
    </div>
   </div>
  </div>
 </section>;
}

/* ---------- Why MS Law: five cards that turn over on hover or focus to reveal the detail ---------- */
const whyIcons: LucideIcon[] = [Compass, Landmark, Globe, Building2, UserCheck];
export function WhyUs() {
 return <section className="ms-section ms-screen ms-why" aria-labelledby="why-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker ms-kicker-light">Why MS Law</span><h2 id="why-title">Why Clients <span className="ms-accent">Choose MS Law</span></h2></div>
    <p>Hover or select a card to read more.</p>
   </div>
   <ul className="ms-flip-grid" data-reveal="repeat">
    {whyUs.map((w, i) => { const Icon = whyIcons[i]; return <li key={w.title} className="ms-flip" style={vars({ "--i": i })} tabIndex={0}>
     <div className="ms-flip-inner">
      <div className="ms-flip-front" aria-hidden="true">
       <div className="ms-flip-top"><span className="ms-flip-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="ms-flip-num">{pad(i + 1)}</span></div>
       <p className="ms-flip-title">{w.title}</p>
       <span className="ms-flip-hint">Read more</span>
      </div>
      <div className="ms-flip-back">
       <h3>{w.title}</h3>
       <p>{w.body}</p>
      </div>
     </div>
    </li>; })}
   </ul>
  </div>
 </section>;
}

/* ---------- How a PVARA engagement works: six stations on a rail; the highlight moves along them ---------- */
export function Process() {
 const [active, setActive] = useState(0);
 const [held, setHeld] = useState(false);
 useEffect(() => {
  if (held || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const id = window.setInterval(() => setActive(a => (a + 1) % processSteps.length), 3200);
  return () => window.clearInterval(id);
 }, [held]);
 return <section className="ms-section ms-screen ms-gap-after ms-rail" aria-labelledby="rail-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">The process</span><h2 id="rail-title">How a PVARA <span className="ms-accent">Engagement Works</span></h2></div>
    <p>Most licensing mandates follow six steps.</p>
   </div>
   <ol className="ms-rail-steps" data-reveal="repeat" style={vars({ "--n": active, "--count": processSteps.length })} onMouseLeave={() => setHeld(false)}>
    <span className="ms-rail-line" aria-hidden="true"><i /></span>
    {processSteps.map(([title, body], i) => <li key={title} className={i === active ? "is-active" : i < active ? "is-done" : ""} style={vars({ "--i": i })}
     onMouseEnter={() => { setActive(i); setHeld(true); }} onFocus={() => { setActive(i); setHeld(true); }} tabIndex={0}>
     <span className="ms-rail-node" aria-hidden="true">{i + 1}</span>
     <div className="ms-rail-card">
      <span className="ms-rail-step">Step {i + 1}</span>
      <h3>{title}</h3>
      <p><span className="sr-only">{i + 1}. {title}: </span>{body.charAt(0).toUpperCase() + body.slice(1)}</p>
     </div>
    </li>)}
   </ol>
  </div>
 </section>;
}

/* ---------- Latest insights: a broadsheet with three columns ---------- */
export function LatestInsights() {
 const items = latestInsights.map(([title, heading, dek]) => ({ ...articles.find(a => a.title === title)!, heading, dek }));
 return <section className="ms-section ms-screen ms-gap-after ms-paper" aria-labelledby="paper-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Insights</span><h2 id="paper-title">Latest <span className="ms-accent">Insights</span></h2></div>
    <p>Mariam writes a regular column for The News on digital asset regulation, stablecoins and Pakistan’s financial infrastructure.</p>
   </div>
   <div className="ms-sheet" data-reveal="repeat">
    <div className="ms-sheet-mast"><span>The News</span><span>Columns by Mariam Saleem</span></div>
    <div className="ms-sheet-cols">
     {items.map((a, i) => <article key={a.heading} className="ms-sheet-col" style={vars({ "--i": i })}>
      <p className="ms-sheet-date">The News, <time>{a.date}</time></p>
      <h3><a href={a.url} target="_blank" rel="noreferrer">{a.heading}<span className="sr-only"> (opens in a new tab)</span></a></h3>
      <p>{a.dek}</p>
      <span className="ms-sheet-read" aria-hidden="true">Read the column <ArrowUpRight size={15} /></span>
     </article>)}
    </div>
   </div>
   <div className="ms-paper-foot" data-reveal><Link className="ms-btn ms-btn-dark" href="/insights-and-media">View All Insights <ArrowUpRight size={17} /></Link></div>
  </div>
 </section>;
}
