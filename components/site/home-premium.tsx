import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import Link from "./link";
import { ArrowRight, ArrowUpRight, Coins, Globe, Briefcase, ArrowLeftRight, Newspaper, Tv, Presentation, type LucideIcon } from "lucide-react";
import { articles, services } from "@/lib/content";
import { founder, homePractices, cryptoAnswer, homeFaqs } from "@/lib/home-content";
import { SplitWords, Roll, Tilt, RollingNumber, spotlight, glowGrid, vars } from "./fx";
import "@/app/pages/home-premium.css";

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- Founder: disclosed portrait and a timeline that draws in when it comes into view ---------- */
const chapters = [
 ["Foundation", "King’s College London"],
 ["Distinction", "Herbert Smith Prize"],
 ["Experience", "20+ years of corporate practice"],
 ["Today", "Founder, MS Law"],
] as const;

export function Founder() {
 return <section className="ms-section ms-hp ms-hp-founder" id="story" aria-labelledby="founder-title">
  <div className="ms-wrap">
   <div className="ms-hp-founder-grid">
    <figure className="ms-hp-portrait fx-disclose" data-reveal>
     <div className="ms-hp-portrait-frame">
      <img src="/images/mariam-saleem-ms-law-800.webp" alt={founder.alt} width={800} height={800} decoding="async" />
     </div>
     <figcaption><span className="ms-hp-portrait-rule" aria-hidden="true" /><strong>Mariam Saleem</strong><span>Founder, MS Law</span></figcaption>
    </figure>
    <div className="ms-hp-founder-copy">
     <div className="fx-heading" data-reveal>
      <span className="ms-kicker">Her story</span>
      <h2 id="founder-title"><SplitWords parts={[["Led by"], ["Mariam Saleem", true]]} /></h2>
     </div>
     <h3 className="ms-hp-founder-name">Mariam Saleem, Founder</h3>
     <p className="ms-hp-body fx-up" data-reveal>{founder.paragraphs[0]}</p>
     <p className="ms-hp-body fx-up" data-reveal>{founder.paragraphs[1]}</p>
     <Link className="ms-hp-link fx-up" data-reveal href="/our-team/"><Roll>{founder.link}</Roll> <ArrowUpRight size={16} /></Link>
    </div>
   </div>
   <ol className="ms-hp-timeline" data-reveal>
    <span className="ms-hp-timeline-fill" aria-hidden="true" />
    {chapters.map(([label, title], i) => <li key={label} style={vars({ "--i": i })}>
     <span className="ms-hp-timeline-node" aria-hidden="true" />
     <span className="ms-hp-timeline-label">{pad(i + 1)} · {label}</span>
     <h3>{title}</h3>
    </li>)}
   </ol>
  </div>
 </section>;
}

/* ---------- Practice areas: expanding panels with a cursor spotlight ---------- */
const practiceIcons: Record<string, LucideIcon> = { "virtual-assets": Coins, "cross-border-transactions": Globe, "strategic-counsel": Briefcase, "payments-market-entry": ArrowLeftRight };
const practiceContent = Object.fromEntries(homePractices.map(s => [s.slug, s]));

export function Practice() {
 const [active, setActive] = useState(0);
 return <section className="ms-section ms-hp ms-hp-practice" aria-labelledby="practice-title">
  <div className="ms-wrap">
   <div className="ms-hp-head">
    <div className="fx-heading" data-reveal><span className="ms-kicker">What we do</span><h2 id="practice-title"><SplitWords parts={[["Our"], ["Practice Areas", true]]} /></h2></div>
    <p className="fx-up" data-reveal>Four practice areas, one senior team. Every matter is led by our founder.</p>
   </div>
   <div className="ms-hp-panels fx-stagger" data-reveal>
    {services.map((s, i) => {
     const Icon = practiceIcons[s.slug], copy = practiceContent[s.slug];
     return <Link key={s.slug} href={copy.href} className={`ms-hp-panel${i === active ? " is-open" : ""}`} style={vars({ "--i": i })}
      onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onPointerMove={spotlight}>
      <span className="ms-hp-panel-ghost" aria-hidden="true">{s.number}</span>
      <div className="ms-hp-panel-top"><span className="ms-hp-panel-num">{s.number}</span><span className="ms-hp-panel-icon"><Icon size={20} strokeWidth={1.5} /></span></div>
      <span className="ms-hp-panel-vtitle" aria-hidden="true">{copy.title}</span>
      <div className="ms-hp-panel-body">
       <span className="ms-hp-panel-label">{s.label}</span>
       <h3>{copy.title}</h3>
       <p>{copy.body}</p>
       <span className="ms-hp-panel-cta"><Roll>{`Explore ${copy.title}`}</Roll> <ArrowUpRight size={17} /></span>
      </div>
     </Link>;
    })}
   </div>
  </div>
 </section>;
}

/* ---------- Professional standing: bento with a shared glow border and rolling numbers ---------- */
const columns = articles.filter(a => a.source === "The News International").length;

export function Standing() {
 return <section className="ms-section ms-hp ms-hp-standing" aria-labelledby="standing-title">
  <div className="ms-wrap">
   <div className="ms-hp-head">
    <div className="fx-heading" data-reveal><span className="ms-kicker">Professional standing</span><h2 id="standing-title"><SplitWords parts={[["A trusted voice on"], ["digital finance.", true]]} /></h2></div>
   </div>
   <ul className="ms-hp-bento fx-stagger" data-reveal onPointerMove={glowGrid}>
    <li className="ms-hp-tile is-hero" data-glow style={vars({ "--i": 0 })}>
     <svg className="ms-hp-tile-rings" viewBox="0 0 400 400" aria-hidden="true">{[70, 120, 170].map(r => <circle key={r} cx="400" cy="400" r={r * 1.6} />)}</svg>
     <span className="ms-hp-tile-label">Experience</span>
     <div><strong className="ms-hp-tile-number"><RollingNumber value={20} /><sup>+</sup></strong><p>Years in M&amp;A and corporate advisory.</p></div>
    </li>
    <li className="ms-hp-tile is-link" data-glow style={vars({ "--i": 1 })}>
     <Link href="/insights-and-media">
      <span className="ms-hp-tile-label">Columnist <ArrowUpRight size={18} /></span>
      <div className="ms-hp-tile-stat"><strong className="ms-hp-tile-number"><RollingNumber value={columns} /></strong><p>Columns on virtual assets regulation in The News</p></div>
     </Link>
    </li>
    <li className="ms-hp-tile is-fact" data-glow style={vars({ "--i": 2 })}>
     <span className="ms-hp-tile-label">Education</span>
     <p className="ms-hp-tile-fact">First Class LLB<span>King&rsquo;s College London</span></p>
    </li>
    <li className="ms-hp-tile is-press" data-glow style={vars({ "--i": 3 })}>
     <span className="ms-hp-tile-label">Featured on</span>
     <ul className="ms-hp-chips"><li>Aaj TV</li><li>24 News</li><li>Disrupt 92</li></ul>
    </li>
   </ul>
  </div>
 </section>;
}

/* ---------- As featured in: a straight row of tilting cards dealt out from the centre ---------- */
const outlets: [LucideIcon, string, string, string][] = [
 [Newspaper, "Margalla Tribune", "Print", "margalla-tribune.png"],
 [Tv, "Aaj TV", "Television", "aaj-tv.png"],
 [Newspaper, "The News", "Columnist", "the-news.svg"],
 [Tv, "24 News", "Television", "24-news.png"],
 [Presentation, "Disrupt 92", "Industry event", "disrupt-92.png"],
];
const outletLinks = [
 articles.find(a => a.source === "Margalla Tribune")?.url ?? "/insights-and-media",
 articles.find(a => a.source === "Aaj TV")?.url ?? "/insights-and-media",
 articles.find(a => a.source === "The News International")?.url ?? "/insights-and-media",
 "/insights-and-media",
 "/insights-and-media",
];

export function Media() {
 return <section className="ms-section ms-hp ms-hp-media" aria-labelledby="media-title">
  <div className="ms-wrap">
   <div className="ms-hp-head is-center fx-heading" data-reveal>
    <span className="ms-kicker">In the media</span>
    <h2 id="media-title"><SplitWords parts={[["As"], ["Featured In", true]]} /></h2>
   </div>
   <ul className="ms-hp-outlets" data-reveal aria-label="As featured in">
    {outlets.map(([Icon, name, medium, file], i) => {
     const external = outletLinks[i].startsWith("https:");
     return <li key={name} style={vars({ "--i": i, "--o": i - 2, zIndex: 10 - Math.abs(i - 2) })} className={i === 2 ? "is-lead" : ""}>
      <Tilt className="ms-hp-outlet">
       <a href={outletLinks[i]} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={`${name}${external ? " (opens in a new tab)" : ""}`}>
        <div className="ms-hp-outlet-top"><span className="ms-hp-outlet-icon"><Icon size={16} strokeWidth={1.5} /></span><span>{pad(i + 1)} / 05</span></div>
        <span className="ms-hp-outlet-logo"><img src={`/images/outlets/${file}`} alt={`${name} logo`} width={240} height={100} /></span>
        <div className="ms-hp-outlet-name"><span>{medium}</span><strong>{name}</strong></div>
        <ArrowUpRight className="ms-hp-outlet-arrow" size={17} aria-hidden="true" />
       </a>
      </Tilt>
     </li>;
    })}
   </ul>
  </div>
 </section>;
}

/* ---------- Is crypto legal: a pinned stage where three cards slide up and the ones beneath recede (Skiper sticky cards) ---------- */
const approach = [
 ["01", "Understand.", "The regulatory framework.", cryptoAnswer.paragraphs[0]],
 ["02", "Connect.", "The route to a licence.", cryptoAnswer.paragraphs[1]],
 ["03", "Advance.", "How do I get started?", homeFaqs[4].a],
] as const;

export function Approach() {
 const ref = useRef<HTMLElement>(null);
 const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
 const [step, setStep] = useState(0);
 useMotionValueEvent(p, "change", v => setStep(v < .4 ? 0 : v < .75 ? 1 : 2));
 return <section className="ms-hp-approach" ref={ref} aria-labelledby="approach-title">
  <div className="ms-hp-approach-stage">
   <div className="ms-wrap ms-hp-approach-grid">
    <div className="ms-hp-approach-intro">
     <div className="fx-heading" data-reveal>
      <span className="ms-kicker">Pakistan’s framework</span>
      <h2 id="approach-title"><SplitWords parts={[["Is Crypto Legal"], ["in Pakistan?", true]]} /></h2>
     </div>
     <p className="fx-up" data-reveal>Yes, within a regulated framework.</p>
     <div className="ms-hp-approach-nav" aria-hidden="true">
      <span className="ms-hp-approach-bar"><motion.i style={{ scaleY: p }} /></span>
      <ol>{approach.map(([n, title], i) => <li key={n} className={i === step ? "is-on" : i < step ? "is-done" : ""}><span>{n}</span>{title}</li>)}</ol>
     </div>
    </div>
    <div className="ms-hp-stack">
     {approach.map((card, i) => <StackCard key={card[0]} card={card} i={i} p={p} />)}
    </div>
   </div>
  </div>
 </section>;
}
function StackCard({ card: [n, title, sub, body], i, p }: { card: readonly [string, string, string, string]; i: number; p: MotionValue<number> }) {
 const enter = [[0, 0], [.12, .42], [.47, .77]][i] as [number, number];
 const y = useTransform(p, enter, i === 0 ? ["0vh", "0vh"] : ["90vh", "0vh"]);
 const scale = useTransform(p, [.12, .42, .47, .77], i === 0 ? [1, .94, .94, .88] : i === 1 ? [1, 1, 1, .94] : [1, 1, 1, 1]);
 const dim = useTransform(p, [.12, .42, .47, .77], i === 0 ? [0, .22, .22, .45] : i === 1 ? [0, 0, 0, .3] : [0, 0, 0, 0]);
 return <motion.article className={`ms-hp-card is-${i}`} style={{ y, scale, "--dim": dim } as never}>
  <div className="ms-hp-card-top"><span>The MS Law approach</span><span>{n} / 03</span></div>
  <div className="ms-hp-card-body">
   <div>
    <h3>{title}</h3>
    <h4>{sub}</h4>
    <p>{body}</p>
    {i === 2 && <Link className="ms-hp-link is-light" href={cryptoAnswer.href}><Roll>{cryptoAnswer.link}</Roll> <ArrowUpRight size={16} /></Link>}
   </div>
   <span className="ms-hp-card-num" aria-hidden="true">{n}</span>
  </div>
 </motion.article>;
}

/* ---------- Testimonial (the original design): the client's approved quote ---------- */
const testimonial = { quote: "Mariam was very professional with her approach and guided me very elaborately given the existing regulation by the regulator at the time. She introduced me to some very relevant personal industry contacts to get insights and exchange notes.", name: "Group CEO", role: "Pixel Park STZE" };

export function Testimonials() {
 return <section className="ms-section ms-screen ms-voices">
  <div className="ms-wrap ms-voices-grid">
   <div className="ms-voices-intro" data-reveal>
    <span className="ms-kicker">Client perspectives</span>
    <h2>In their <span className="ms-accent">own words.</span></h2>
    <p>What it is like to work with Mariam, from the founders, investors and businesses she advises.</p>
   </div>
   <div className="ms-voices-stage is-single" data-reveal style={vars({ "--d": ".1s" })}>
    <span className="ms-quote-mark" aria-hidden="true">“</span>
    <div className="ms-quotes">
     <figure className="is-active">
      <blockquote>{testimonial.quote}</blockquote>
      <figcaption><strong>{testimonial.name}</strong><span>{testimonial.role}</span></figcaption>
     </figure>
    </div>
   </div>
  </div>
 </section>;
}

/* ---------- FAQ: a question index with a sliding marker and an answer panel (original design) ----------
   Desktop: hovering, focusing or clicking a question swaps the answer on the right.
   Mobile: the answer opens beneath its question instead. */
export function Faq() {
 const [active, setActive] = useState(0);
 const [open, setOpen] = useState(0); // mobile
 const item = homeFaqs[active];
 return <section className="ms-section ms-screen ms-faq">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Questions</span><h2>Frequently Asked <span className="ms-accent">Questions</span></h2></div>
   </div>
   <div className="ms-faq-grid">
    <div className="ms-faq-index" data-reveal="repeat" style={vars({ "--n": active })}>
     <span className="ms-faq-marker" aria-hidden="true" />
     <ol className="ms-faq-list">
     {homeFaqs.map((f, i) => <li key={f.q} style={vars({ "--i": i })} className={`${i === active ? "is-active" : ""}${i === open ? " is-open" : ""}`}>
      <button type="button" aria-pressed={i === active} aria-expanded={i === open}
       onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { setActive(i); setOpen(open === i ? -1 : i); }}>
       <span className="ms-faq-num">{pad(i + 1)}</span><span className="ms-faq-q">{f.q}</span><ArrowRight className="ms-faq-go" size={16} aria-hidden="true" />
      </button>
      <div className="ms-faq-inline"><div><p>{f.a}</p>{f.link && <Link href={f.link[0]}>{f.link[1]} <ArrowUpRight size={14} /></Link>}</div></div>
     </li>)}
     </ol>
    </div>
    <article className="ms-faq-answer" data-reveal="repeat" aria-live="polite">
     <span className="ms-faq-mark" aria-hidden="true">?</span>
     <div className="ms-faq-answer-top"><span>Answer</span><strong>{pad(active + 1)} <i>/ {homeFaqs.length}</i></strong></div>
     <div className="ms-faq-answer-body" key={active}>
      <h3>{item.q}</h3>
      <p>{item.a}</p>
      {item.link && <Link className="ms-faq-link" href={item.link[0]}>{item.link[1]} <ArrowUpRight size={16} /></Link>}
     </div>
     <div className="ms-faq-progress" aria-hidden="true">{homeFaqs.map((_, i) => <i key={i} className={i === active ? "is-on" : ""} />)}</div>
    </article>
   </div>
  </div>
 </section>;
}
