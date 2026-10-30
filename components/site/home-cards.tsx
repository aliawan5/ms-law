import { useState, type CSSProperties } from "react";
import Link from "./link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Coins, Globe, Briefcase, ArrowLeftRight, Newspaper, Tv, Presentation, Pause, Play, type LucideIcon } from "lucide-react";
import { articles, services } from "@/lib/content";
import { homeFaqs } from "@/lib/home-content";

const vars = (v: Record<string, string | number>) => v as CSSProperties;
const practiceIcons: Record<string, LucideIcon> = { "virtual-assets": Coins, "cross-border-transactions": Globe, "strategic-counsel": Briefcase, "payments-market-entry": ArrowLeftRight };
// Home page practice summaries (SEO copy, "MS Law — Home Page Content").
const practiceSummary: Record<string, string> = {
 "virtual-assets": "PVARA licensing strategy, NOC and sandbox applications, VASP structuring, stablecoin and RWA tokenization advisory, and AML/CFT and Travel Rule compliance.",
 "cross-border-transactions": "Cross-border M&A, joint ventures and shareholder arrangements, legal due diligence and Competition Commission of Pakistan merger filings for investors entering Pakistan.",
 "strategic-counsel": "Ongoing general counsel support for companies operating in Pakistan: corporate governance, regulatory compliance, commercial contracts, employment frameworks and government liaison.",
 "payments-market-entry": "Company set-up with SECP, State Bank of Pakistan licensing for payments and fintech firms, and banking access for licensed VASPs, including client money accounts.",
};

/* ---------- 1. Our Practice Areas: expanding panels ----------
   Four navy panels; the open one widens to show its practice. They advance on their own (the open panel's
   progress line is the timer) until the visitor hovers, focuses or taps one. */
export function Practice() {
 const [active, setActive] = useState(0);
 const [steered, setSteered] = useState(false);
 const [hovered, setHovered] = useState(false);
 const open = (i: number) => { setActive(i); setSteered(true); };
 return <section className="ms-section ms-screen ms-gap-after ms-practice">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">What we do</span><h2>Our <span className="ms-accent">Practice Areas</span></h2></div>
    <p>Four practice areas, one senior team. Every matter is led by our founder.</p>
   </div>
   <div className={`ms-panels${steered || hovered ? " is-held" : ""}`} data-reveal="repeat" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    {services.map((s, i) => {
     const Icon = practiceIcons[s.slug];
     return <Link key={s.slug} href={`/services/${s.slug}`} className={`ms-panel${i === active ? " is-open" : ""}`} style={vars({ "--i": i })}
      onMouseEnter={() => open(i)} onFocus={() => open(i)}>
      <span className="ms-panel-ghost" aria-hidden="true">{s.number}</span>
      <div className="ms-panel-top"><span className="ms-panel-num">{s.number}</span><span className="ms-panel-icon"><Icon size={20} strokeWidth={1.5} /></span></div>
      <span className="ms-panel-vtitle" aria-hidden="true">{s.title}</span>
      <div className="ms-panel-body">
       <span className="ms-panel-label">{s.label}</span>
       <h3>{s.title}</h3>
       <p>{practiceSummary[s.slug]}</p>
       <span className="ms-panel-cta">Explore {s.title} <ArrowUpRight size={17} /></span>
      </div>
      <i className="ms-panel-timer" aria-hidden="true" onAnimationEnd={() => setActive(a => (a + 1) % services.length)} />
     </Link>;
    })}
   </div>
  </div>
 </section>;
}

/* ---------- 2. Professional standing: the trust strip as a bento of navy tiles ---------- */
const columns = articles.filter(a => a.source === "The News International").length;

export function Standing() {
 return <section className="ms-section ms-screen ms-gap-after ms-standing">
  <div className="ms-wrap ms-standing-inner">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Professional standing</span><h2>A trusted voice on <span className="ms-accent">digital finance.</span></h2></div>
   </div>
   <ul className="ms-bento" data-reveal="repeat">
    <li className="ms-tile ms-tile-hero" style={vars({ "--i": 0 })}>
     <span className="ms-tile-label">Experience</span>
     <strong className="ms-tile-number"><span data-count="20">20</span><sup>+</sup></strong>
     <p>Years in M&amp;A and corporate advisory.</p>
    </li>
    <li style={vars({ "--i": 1 })} className="ms-tile-cell">
     <Link className="ms-tile ms-tile-link" href="/insights-and-media">
      <span className="ms-tile-label">Columnist <ArrowUpRight size={18} /></span>
      <div className="ms-tile-stat"><strong className="ms-tile-number"><span data-count={columns}>{columns}</span></strong><p>Columns on virtual assets regulation in The News</p></div>
     </Link>
    </li>
    <li className="ms-tile ms-tile-chipset" style={vars({ "--i": 2 })}>
     <span className="ms-tile-label">Education</span>
     <p className="ms-tile-fact">First Class LLB<span>King&rsquo;s College London</span></p>
    </li>
    <li className="ms-tile ms-tile-press" style={vars({ "--i": 3 })}>
     <span className="ms-tile-label">Featured on</span>
     <ul className="ms-tile-chips"><li>Aaj TV</li><li>24 News</li><li>Disrupt 92</li></ul>
    </li>
   </ul>
  </div>
 </section>;
}

/* ---------- 3. In the media: a straight row of cards ----------
   The cards start as one stack in the centre and deal out into a line as the section arrives; hovering lifts a card. */
const outlets: [LucideIcon, string, string][] = [
 [Newspaper, "Margalla Tribune", "Print"],
 [Tv, "Aaj TV", "Television"],
 [Newspaper, "The News", "Columnist"],
 [Tv, "24 News", "Television"],
 [Presentation, "Disrupt 92", "Industry event"],
];

export function Media() {
 return <section className="ms-section ms-screen ms-gap-after ms-media">
  <div className="ms-wrap">
   <div className="ms-media-head" data-reveal>
    <span className="ms-kicker">In the media</span>
    <h2>As <span className="ms-accent">Featured In</span></h2>
   </div>
   <ul className="ms-fan" data-reveal="repeat" aria-label="As featured in">
    {outlets.map(([Icon, name, medium], i) => <li key={name} className={`ms-fan-card${i === 2 ? " is-lead" : ""}`} style={vars({ "--i": i, "--o": i - 2, zIndex: 10 - Math.abs(i - 2) })}>
     <div className="ms-fan-top"><span className="ms-fan-icon"><Icon size={20} strokeWidth={1.5} /></span><span className="ms-fan-index">0{i + 1} / 05</span></div>
     <div className="ms-fan-name"><span>{medium}</span><strong>{name}</strong></div>
    </li>)}
   </ul>
  </div>
 </section>;
}

/* ---------- 5. Testimonials (the original design) ---------- */
// PLACEHOLDER COPY: replace with approved client testimonials before launch.
const testimonials = [
 { quote: "Mariam brought clarity to a regulatory question we had struggled to frame. Her advice was precise, commercial and easy to act on.", name: "Client name", role: "Founder, digital asset platform" },
 { quote: "Her understanding of both the Pakistani market and international practice made her an invaluable partner on our cross-border transaction.", name: "Client name", role: "Director, international investor" },
 { quote: "Responsive, considered and genuinely invested in our success. We always knew where we stood and what came next.", name: "Client name", role: "General Counsel, fintech company" },
];

export function Testimonials() {
 const [index, setIndex] = useState(0);
 const [hovered, setHovered] = useState(false);
 const [stopped, setStopped] = useState(false);
 const [touched, setTouched] = useState(false);
 const paused = hovered || stopped;
 const go = (step: number) => setIndex(i => (i + step + testimonials.length) % testimonials.length);
 const choose = (step: number | null, to?: number) => { setTouched(true); if (step === null) setIndex(to!); else go(step); };
 // The active dot's fill animation is the timer: when it finishes, the next quote shows.
 // Pausing the animation pauses the rotation; reduced motion disables both.
 return <section className={`ms-section ms-screen ms-gap-after ms-voices${paused ? " is-paused" : ""}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}>
  <div className="ms-wrap ms-voices-grid">
   <div className="ms-voices-intro" data-reveal>
    <span className="ms-kicker">Client perspectives</span>
    <h2>In their <span className="ms-accent">own words.</span></h2>
    <p>What it is like to work with Mariam, from the founders, investors and businesses she advises.</p>
    <span className="ms-placeholder-tag">Placeholder · awaiting approved client feedback</span>
   </div>
   <div className="ms-voices-stage" data-reveal style={vars({ "--d": ".1s" })}>
    <span className="ms-quote-mark" aria-hidden="true">“</span>
    <div className="ms-quotes" aria-live={touched ? "polite" : "off"}>
     {testimonials.map((t, i) => <figure key={i} className={i === index ? "is-active" : ""} aria-hidden={i !== index}>
      <blockquote>{t.quote}</blockquote>
      <figcaption><strong>{t.name}</strong><span>{t.role} · Placeholder</span></figcaption>
     </figure>)}
    </div>
    <div className="ms-voices-controls">
     <div className="ms-voices-dots">{testimonials.map((_, i) => <button key={i} type="button" className={i === index ? "is-active" : ""} aria-label={`Show testimonial ${i + 1}`} aria-current={i === index} onClick={() => choose(null, i)}><i onAnimationEnd={() => go(1)} /></button>)}</div>
     <div className="ms-voices-arrows">
      <button type="button" aria-pressed={stopped} aria-label={stopped ? "Resume rotation" : "Pause rotation"} onClick={() => { setStopped(!stopped); setTouched(true); }}>{stopped ? <Play size={16} /> : <Pause size={16} />}</button>
      <button type="button" aria-label="Previous testimonial" onClick={() => choose(-1)}><ArrowLeft size={18} /></button>
      <button type="button" aria-label="Next testimonial" onClick={() => choose(1)}><ArrowRight size={18} /></button>
     </div>
    </div>
   </div>
  </div>
 </section>;
}

/* ---------- 6. FAQ: a question index with a sliding marker and an answer panel ----------
   Desktop: hovering, focusing or clicking a question swaps the answer on the right.
   Mobile: the answer opens beneath its question instead. */
const faqs = homeFaqs;

export function Faq() {
 const [active, setActive] = useState(0);
 const [open, setOpen] = useState(0); // mobile
 const item = faqs[active];
 return <section className="ms-section ms-screen ms-faq">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Questions</span><h2>Frequently Asked <span className="ms-accent">Questions</span></h2></div>
   </div>
   <div className="ms-faq-grid">
    <div className="ms-faq-index" data-reveal="repeat" style={vars({ "--n": active })}>
     <span className="ms-faq-marker" aria-hidden="true" />
     <ol className="ms-faq-list">
     {faqs.map((f, i) => <li key={f.q} style={vars({ "--i": i })} className={`${i === active ? "is-active" : ""}${i === open ? " is-open" : ""}`}>
      <button type="button" aria-pressed={i === active} aria-expanded={i === open}
       onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { setActive(i); setOpen(open === i ? -1 : i); }}>
       <span className="ms-faq-num">{String(i + 1).padStart(2, "0")}</span><span className="ms-faq-q">{f.q}</span><ArrowRight className="ms-faq-go" size={16} aria-hidden="true" />
      </button>
      <div className="ms-faq-inline"><div><p>{f.a}</p>{f.link && <Link href={f.link[0]}>{f.link[1]} <ArrowUpRight size={14} /></Link>}</div></div>
     </li>)}
     </ol>
    </div>
    <article className="ms-faq-answer" data-reveal="repeat" aria-live="polite">
     <span className="ms-faq-mark" aria-hidden="true">?</span>
     <div className="ms-faq-answer-top"><span>Answer</span><strong>{String(active + 1).padStart(2, "0")} <i>/ {faqs.length}</i></strong></div>
     <div className="ms-faq-answer-body" key={active}>
      <h3>{item.q}</h3>
      <p>{item.a}</p>
      {item.link && <Link className="ms-faq-link" href={item.link[0]}>{item.link[1]} <ArrowUpRight size={16} /></Link>}
     </div>
     <div className="ms-faq-progress" aria-hidden="true">{faqs.map((_, i) => <i key={i} className={i === active ? "is-on" : ""} />)}</div>
    </article>
   </div>
  </div>
 </section>;
}
