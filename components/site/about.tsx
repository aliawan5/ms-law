import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "./link";
import { serviceHref } from "@/lib/routes";
import { Landmark, ArrowDown, ArrowUpRight, ArrowLeftRight, Coins, ShieldCheck, Smartphone, Globe, Rocket, Building2, Network, MapPin, Crosshair, Handshake, LineChart, Check, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";
import { PageHero } from "./ui";
import { aboutContent, aboutPractices, aboutPrinciples, aboutFrameworks, aboutFaqs } from "@/lib/about-content";

const order = (i: number) => ({ "--i": i }) as CSSProperties;
const practice = (slug: string) => services.find(s => s.slug === slug)!;

const strengths: [LucideIcon, string, string][] = [
 [Crosshair, aboutPrinciples[0].title, aboutPrinciples[0].body],
 [Handshake, aboutPrinciples[1].title, aboutPrinciples[1].body],
 [LineChart, aboutPrinciples[2].title, aboutPrinciples[2].body],
];

// Retain the eight-node orbit; the comparative UAE/EU frameworks share its last node.
const clients: [LucideIcon, string, string[]][] = [
 [ArrowLeftRight, aboutFrameworks[0], ["virtual-assets"]],
 [Network, aboutFrameworks[1], ["virtual-assets"]],
 [ShieldCheck, aboutFrameworks[2], ["payments-market-entry"]],
 [Coins, aboutFrameworks[3], ["strategic-counsel"]],
 [Smartphone, aboutFrameworks[4], ["cross-border-transactions"]],
 [Globe, aboutFrameworks[5], ["virtual-assets"]],
 [Rocket, aboutFrameworks[6], ["virtual-assets"]],
 [Building2, aboutFrameworks.slice(7).join(" · "), ["virtual-assets", "payments-market-entry"]],
];

// The original four chart cards now carry the four supplied practice descriptions.
const moments = aboutPractices.map((p, i) => ({ x: [12, 37, 62, 87][i], y: [80, 60, 38, 16][i], kind: p.title, value: `0${i + 1}`, label: p.body, href: p.href }));

// The original three tickets present the three supplied FAQs.
const jurisdictions = aboutFaqs.map((faq, i) => ({ code: `0${i + 1}`, name: faq.q, tag: "MS Law", role: faq.short, frameworks: [faq.a] }));

export function AboutPage() {
 return <>
  <PageHero label="About the firm" title={aboutContent.heading} description={<>{aboutContent.intro.split("Mariam Saleem")[0]}<Link href="/our-team/">Mariam Saleem</Link>{aboutContent.intro.split("Mariam Saleem")[1]}</>} icon={Landmark} sealText="THE FIRM · SPECIALIST COUNSEL · ISLAMABAD · PAKISTAN · ">
   <Link className="ms-btn ms-btn-dark" href="/contact/">{aboutContent.ctaButton} <ArrowUpRight size={17} /></Link>
   <a className="ms-link-dark" href="#who-we-are">{aboutContent.storyHeading} <ArrowDown size={16} /></a>
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
    <span className="ms-kicker">About MS Law</span>
    <h2>Our <span className="ms-accent">Story</span></h2>
    <p className="ms-about-lead">{aboutContent.story}</p>
    <div className="ms-about-actions">
     <Link className="ms-btn ms-btn-dark" href="/services">Explore our services <ArrowUpRight size={17} /></Link>
     <Link className="ms-link-dark" href="/our-team">Meet the team <ArrowUpRight size={16} /></Link>
    </div>
   </div>
   <figure className="ms-about-media" data-reveal="repeat">
    <div className="ms-about-media-frame"><img src="/images/about/pakistan-monument-islamabad.jpg" alt="Pakistan Monument in Islamabad" width={2272} height={1704} loading="lazy" /></div>
    <figcaption className="ms-about-place">
     <span className="ms-about-place-icon"><MapPin size={20} strokeWidth={1.6} /></span>
     <span><strong>Islamabad, Pakistan</strong><small>Advising across borders</small><small><a href="https://commons.wikimedia.org/wiki/File:Day_time_front_view_of_Pakistan_Monument.JPG" target="_blank" rel="noreferrer">Photo: Maqsoodgujjer</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a><span className="sr-only">; cropped and colour treated for display</span></small></span>
    </figcaption>
   </figure>
  </div>
 </section>;
}

/* What sets us apart: solid navy cards. */
function Strengths() {
 return <section className="ms-section ms-screen ms-about-glass">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker ms-kicker-light">MS Law</span><h2>How We <span className="ms-accent">Work</span></h2></div>
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
    <div><span className="ms-kicker">Our expertise</span><h2>What We <span className="ms-accent">Do</span></h2></div>
   </div>
   <div className="ms-now" data-reveal="repeat">
    <svg className="ms-now-chart" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
     <defs><linearGradient id="ms-now-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0f1e33" stopOpacity=".16" /><stop offset="1" stopColor="#0f1e33" stopOpacity="0" /></linearGradient></defs>
     {[1, 2, 3].map(k => <line key={k} className="ms-now-grid" x1="0" x2="1200" y1={k * 100} y2={k * 100} />)}
     <polygon className="ms-now-area" points={`0,400 0,360 ${points} 1200,40 1200,400`} fill="url(#ms-now-fill)" />
     <polyline className="ms-now-line" points={`0,360 ${points} 1200,40`} pathLength={1} />
    </svg>
    {moments.map((m, i) => <div key={m.value} className={`ms-now-pin${m.y > 50 ? " is-above" : ""}${i >= 2 ? " is-market" : ""}`} style={{ "--i": i, left: `${m.x}%`, top: `${m.y}%` } as CSSProperties}>
     <span className="ms-now-dot" aria-hidden="true" />
     <article className="ms-now-card">
      <Link href={m.href}>
      <span className="ms-now-kind">{m.kind}</span>
      <strong>{m.value}</strong>
      <p>{m.label}</p>
      </Link>
     </article>
    </div>)}
   </div>
  </div>
 </section>;
}

/* Regulators orbit the firm; choosing one shows the practices that serve it. */
function Clients() {
 const [active, setActive] = useState(0);
 const [steered, setSteered] = useState(false);
 const current = useRef(0);
 const n = clients.length;
 const show = (to: number) => {
  current.current = to;
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
    <span className="ms-kicker ms-kicker-light">Our practice</span>
    <h2>Regulators and Frameworks <span className="ms-accent">We Work With</span></h2>
    <p>{aboutFrameworks.join(" · ")}</p>
    <Link className="ms-btn ms-btn-light" href="/contact/">{aboutContent.ctaButton} <ArrowUpRight size={17} /></Link>
   </div>
   <div className="ms-orbit-stage" data-reveal="repeat">
    <svg className="ms-orbit-rings" viewBox="0 0 400 400" aria-hidden="true">
     <circle className="ms-orbit-ring" cx="200" cy="200" r="168" />
     <circle className="ms-orbit-ring is-dashed" cx="200" cy="200" r="120" />
    </svg>
    <div className="ms-orbit-core" aria-live="polite">
     <span className="ms-orbit-core-icon" key={active}><Icon size={22} strokeWidth={1.5} /></span>
     <span className="ms-orbit-core-kicker">Practices for</span>
     <h3 key={`n${active}`}>{name}</h3>
     <div className="ms-orbit-links">{slugs.map(slug => <Link key={slug} href={serviceHref(slug)}>{practice(slug).title} <ArrowUpRight size={14} /></Link>)}</div>
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
    <div><span className="ms-kicker">Questions</span><h2>About MS Law: <span className="ms-accent">FAQs</span></h2></div>
   </div>
   <div className="ms-tickets" data-reveal="repeat">
    {jurisdictions.map((j, i) => <article key={j.code} className={`ms-ticket${i === 0 ? " is-featured" : ""}`} style={order(i)}>
     <div className="ms-ticket-main">
      <div className="ms-ticket-row"><span>Question 0{i + 1}</span><span className="ms-ticket-tag">{j.tag}</span></div>
      <div className="ms-ticket-code"><strong aria-hidden="true">{j.code}</strong><div><h3>{j.name}</h3><p>{j.role}</p></div></div>
     </div>
     <div className="ms-ticket-stub">
      <span className="ms-ticket-stub-label">Answer</span>
      <ul>{j.frameworks.map(f => <li key={f}><Check size={15} strokeWidth={2} />{f}</li>)}</ul>
      <span className="ms-ticket-bars" aria-hidden="true" />
     </div>
    </article>)}
   </div>
  </div>
 </section>;
}
