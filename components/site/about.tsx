import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "./link";
import { Landmark, ArrowDown, ArrowUpRight, ArrowLeftRight, Coins, ShieldCheck, Smartphone, Globe, Rocket, Building2, Network, MapPin, Crosshair, Handshake, LineChart, Check, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";
import { PageHero } from "./ui";

const order = (i: number) => ({ "--i": i }) as CSSProperties;
const practice = (slug: string) => services.find(s => s.slug === slug)!;

const strengths: [LucideIcon, string, string][] = [
 [Crosshair, "Specialist focus", "Pakistan’s virtual assets regulatory framework and cross-border market entry."],
 [Handshake, "Established transaction credentials", "Cross-border M&A, investment structuring, corporate governance and strategic general counsel retainers."],
 [LineChart, "Commercial understanding", "Advice considered in the context of your business model, objectives and operating environment."],
];

// Each client type links to the practices whose `audience` in content.ts names it.
const clients: [LucideIcon, string, string[]][] = [
 [ArrowLeftRight, "Global exchanges", ["virtual-assets", "payments-market-entry"]],
 [Network, "Stablecoin infrastructure providers", ["payments-market-entry"]],
 [ShieldCheck, "Custody providers", ["virtual-assets"]],
 [Coins, "Token issuers", ["virtual-assets"]],
 [Smartphone, "Fintech companies", ["virtual-assets"]],
 [Globe, "International investors", ["cross-border-transactions", "payments-market-entry"]],
 [Rocket, "Founders", ["virtual-assets", "cross-border-transactions"]],
 [Building2, "Established businesses", ["strategic-counsel"]],
];

// Market figures and dates as cited in the firm's own columns in The News International.
const moments = [
 { x: 12, y: 80, kind: "Milestone", value: "2 Dec 2025", label: "PVARA began accepting licence applications for crypto exchanges." },
 { x: 37, y: 60, kind: "Milestone", value: "Mar 2026", label: "The Virtual Assets Act, 2026 cleared both chambers of parliament." },
 { x: 62, y: 38, kind: "Market", value: "40M", label: "Crypto users in Pakistan, one of the world’s largest markets." },
 { x: 87, y: 16, kind: "Market", value: "$25B", label: "Annual trading volume moving from regulatory limbo to legislation." },
];

const jurisdictions = [
 { code: "PK", name: "Pakistan", tag: "Advised directly", role: "The framework the practice advises on directly.", frameworks: ["Virtual Assets Act, 2026", "Pakistan Virtual Assets Regulatory Authority (PVARA)", "State Bank of Pakistan foreign exchange regime"] },
 { code: "AE", name: "United Arab Emirates", tag: "Comparative", role: "Comparative analysis across a key corridor.", frameworks: ["Virtual Assets Regulatory Authority (VARA)"] },
 { code: "EU", name: "European Union", tag: "Comparative", role: "Comparative analysis with a leading international standard.", frameworks: ["Markets in Crypto-Assets Regulation (MiCA)"] },
] as const;

export function AboutPage() {
 return <>
  <PageHero label="About the firm" title="Pioneer virtual assets counsel." italic="Established transaction credentials." description="A specialist advisory practice based in Islamabad." icon={Landmark} sealText="THE FIRM · SPECIALIST COUNSEL · ISLAMABAD · PAKISTAN · ">
   <Link className="ms-btn ms-btn-dark" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
   <a className="ms-link-dark" href="#who-we-are">Who we are <ArrowDown size={16} /></a>
  </PageHero>
  <WhoWeAre />
  <Strengths />
  <WhyNow />
  <Clients />
  <Landscape />
 </>;
}

/* Who we are: copy on the left, a navy-toned image with a location card on the right. */
function WhoWeAre() {
 return <section className="ms-section ms-screen ms-gap-after ms-about-intro" id="who-we-are">
  <div className="ms-wrap ms-about-intro-grid">
   <div className="ms-about-intro-copy" data-reveal="repeat">
    <span className="ms-kicker">Who we are</span>
    <h2>A specialist practice for <span className="ms-accent">a new market.</span></h2>
    <p className="ms-about-lead">MS Law brings deep specialist expertise in Pakistan’s emerging digital asset economy together with corporate and transactional experience.</p>
    <p>Every question is considered in the context of the business as a whole.</p>
    <div className="ms-about-actions">
     <Link className="ms-btn ms-btn-dark" href="/services">Explore our services <ArrowUpRight size={17} /></Link>
     <Link className="ms-link-dark" href="/our-team">Meet the team <ArrowUpRight size={16} /></Link>
    </div>
   </div>
   <figure className="ms-about-media" data-reveal="repeat">
    <div className="ms-about-media-frame"><img src="/images/architecture.jpg" alt="" /></div>
    <figcaption className="ms-about-place">
     <span className="ms-about-place-icon"><MapPin size={20} strokeWidth={1.6} /></span>
     <span><strong>Islamabad, Pakistan</strong><small>Advising across borders</small></span>
    </figcaption>
   </figure>
  </div>
 </section>;
}

/* What sets us apart: frosted-glass cards floating over slowly drifting light on navy. */
function Strengths() {
 return <section className="ms-section ms-screen ms-about-glass">
  <div className="ms-glass-orbs" aria-hidden="true"><span /><span /><span /></div>
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker ms-kicker-light">What sets us apart</span><h2>The value of <span className="ms-accent">a clear perspective.</span></h2></div>
    <p>Our approach connects legal analysis with the decisions your business needs to make.</p>
   </div>
   <div className="ms-glass-grid" data-reveal="repeat">
    {strengths.map(([Icon, title, body], i) => <article className="ms-glass-card" key={title} style={order(i)}>
     <div className="ms-glass-top"><span className="ms-glass-icon"><Icon size={24} strokeWidth={1.5} /></span><span className="ms-glass-num" aria-hidden="true">0{i + 1}</span></div>
     <div><h3>{title}</h3><p>{body}</p></div>
     <i className="ms-glass-line" aria-hidden="true" />
    </article>)}
   </div>
  </div>
 </section>;
}

/* Why now: an annotated chart. The line draws in and each milestone or figure pins itself to a point on it. */
function WhyNow() {
 const points = moments.map(m => `${m.x * 12},${m.y * 4}`).join(" ");
 return <section className="ms-section ms-screen ms-gap-after ms-about-now">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Why now</span><h2>A market moving <span className="ms-accent">from limbo to law.</span></h2></div>
    <p>Pakistan’s digital asset economy is being formalised quickly. The milestones and figures below are drawn from our published analysis.</p>
   </div>
   <div className="ms-now" data-reveal="repeat">
    <svg className="ms-now-chart" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
     <defs><linearGradient id="ms-now-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#152a47" stopOpacity=".16" /><stop offset="1" stopColor="#152a47" stopOpacity="0" /></linearGradient></defs>
     {[1, 2, 3].map(k => <line key={k} className="ms-now-grid" x1="0" x2="1200" y1={k * 100} y2={k * 100} />)}
     <polygon className="ms-now-area" points={`0,400 0,360 ${points} 1200,40 1200,400`} fill="url(#ms-now-fill)" />
     <polyline className="ms-now-line" points={`0,360 ${points} 1200,40`} pathLength={1} />
    </svg>
    {moments.map((m, i) => <div key={m.value} className={`ms-now-pin${m.y > 50 ? " is-above" : ""}${m.kind === "Market" ? " is-market" : ""}`} style={{ "--i": i, left: `${m.x}%`, top: `${m.y}%` } as CSSProperties}>
     <span className="ms-now-dot" aria-hidden="true" />
     <article className="ms-now-card">
      <span className="ms-now-kind">{m.kind}</span>
      <strong>{m.value}</strong>
      <p>{m.label}</p>
     </article>
    </div>)}
   </div>
  </div>
 </section>;
}

/* Who we advise: client types orbit the firm; choosing one turns a beam towards it and shows the practices that serve it. */
function Clients() {
 const [active, setActive] = useState(0);
 const [turn, setTurn] = useState(0); // beam angle; always moves the short way round
 const [steered, setSteered] = useState(false);
 const current = useRef(0);
 const n = clients.length;
 const show = (to: number) => {
  let d = ((to - current.current) % n + n) % n; if (d > n / 2) d -= n;
  current.current = to;
  setTurn(t => t + d * (360 / n));
  setActive(to);
 };
 const advance = useRef(() => {});
 advance.current = () => show((current.current + 1) % n);
 useEffect(() => {
  if (steered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const id = window.setInterval(() => advance.current(), 3200);
  return () => window.clearInterval(id);
 }, [steered]);
 const choose = (i: number) => { show(i); setSteered(true); };
 const [Icon, name, slugs] = clients[active];
 return <section className="ms-section ms-screen ms-about-orbit">
  <div className="ms-wrap ms-orbit-layout">
   <div className="ms-orbit-intro" data-reveal>
    <span className="ms-kicker ms-kicker-light">Who we advise</span>
    <h2>For businesses building <span className="ms-accent">what comes next.</span></h2>
    <p>From global platforms entering Pakistan to founders building at home. Choose a client type to see the practices that serve it.</p>
    <Link className="ms-btn ms-btn-light" href="/contact">Discuss your matter <ArrowUpRight size={17} /></Link>
   </div>
   <div className="ms-orbit-stage" data-reveal="repeat" style={{ "--turn": `${turn}deg` } as CSSProperties}>
    <svg className="ms-orbit-rings" viewBox="0 0 400 400" aria-hidden="true">
     <circle className="ms-orbit-ring" cx="200" cy="200" r="168" />
     <circle className="ms-orbit-ring is-dashed" cx="200" cy="200" r="120" />
     <g className="ms-orbit-beam"><line x1="200" y1="200" x2="200" y2="32" /></g>
    </svg>
    <div className="ms-orbit-core" aria-live="polite">
     <span className="ms-orbit-core-icon" key={active}><Icon size={22} strokeWidth={1.5} /></span>
     <span className="ms-orbit-core-kicker">Practices for</span>
     <h3 key={`n${active}`}>{name}</h3>
     <div className="ms-orbit-links">{slugs.map(slug => <Link key={slug} href={`/services/${slug}`}>{practice(slug).title} <ArrowUpRight size={14} /></Link>)}</div>
    </div>
    <ul className="ms-orbit-nodes">
     {clients.map(([NodeIcon, label], i) => <li key={label} style={{ "--a": `${i * 45}deg`, "--i": i } as CSSProperties}>
      <button type="button" className={i === active ? "is-active" : ""} aria-pressed={i === active} onClick={() => choose(i)} onMouseEnter={() => choose(i)} onFocus={() => choose(i)}>
       <span className="ms-orbit-node-icon"><NodeIcon size={18} strokeWidth={1.6} /></span>
       <span className="ms-orbit-node-label">{label}</span>
      </button>
     </li>)}
    </ul>
   </div>
  </div>
 </section>;
}

/* Regulatory landscape: one boarding-pass style ticket per jurisdiction, dealt in from the side. */
function Landscape() {
 return <section className="ms-section ms-screen ms-gap-after ms-about-law">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Regulatory landscape</span><h2>Fluent in the frameworks <span className="ms-accent">that shape your market.</span></h2></div>
    <p>Advice grounded in Pakistan’s framework, informed by comparative analysis across the UAE and the EU.</p>
   </div>
   <div className="ms-tickets" data-reveal="repeat">
    {jurisdictions.map((j, i) => <article key={j.code} className={`ms-ticket${i === 0 ? " is-featured" : ""}`} style={order(i)}>
     <div className="ms-ticket-main">
      <div className="ms-ticket-row"><span>Jurisdiction 0{i + 1}</span><span className="ms-ticket-tag">{j.tag}</span></div>
      <div className="ms-ticket-code"><strong aria-hidden="true">{j.code}</strong><div><h3>{j.name}</h3><p>{j.role}</p></div></div>
     </div>
     <div className="ms-ticket-stub">
      <span className="ms-ticket-stub-label">Frameworks</span>
      <ul>{j.frameworks.map(f => <li key={f}><Check size={15} strokeWidth={2} />{f}</li>)}</ul>
      <span className="ms-ticket-bars" aria-hidden="true" />
     </div>
    </article>)}
   </div>
  </div>
 </section>;
}
