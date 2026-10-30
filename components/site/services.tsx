import { useState, type CSSProperties } from "react";
import Link from "./link";
import {
 ArrowUpRight, ArrowRight, Plus, Scale, Coins, Globe, Briefcase, ArrowLeftRight,
 FileCheck2, FlaskConical, Network, MessagesSquare, Landmark, Handshake, SearchCheck, Users, Globe2,
 Building2, ShieldCheck, UserCog, FileSignature, Construction, CircleDollarSign, Route, Compass, Banknote,
 type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { frameworks, prepare, scenarios } from "@/lib/practice-detail";
import { PageHero } from "./ui";
import "@/app/pages/services.css";

type Service = (typeof services)[number];
const order = (i: number) => ({ "--i": i }) as CSSProperties;
const practiceIcons: Record<string, LucideIcon> = { "virtual-assets": Coins, "cross-border-transactions": Globe, "strategic-counsel": Briefcase, "payments-market-entry": ArrowLeftRight };
const practiceImages: Record<string, string> = { "virtual-assets": "firm.webp", "cross-border-transactions": "city.jpg", "strategic-counsel": "columns.jpg", "payments-market-entry": "architecture.jpg" };
const scopeIcons: Record<string, LucideIcon> = {
 "PVARA licensing strategy & NOC advisory": FileCheck2,
 "Sandbox applications & regulatory scoping": FlaskConical,
 "VASP structuring & operational compliance": Network,
 "RWA tokenization & token issuance advisory": Coins,
 "Direct regulator engagement": MessagesSquare,
 "Cross-border M&A & investment structuring": Handshake,
 "Legal & regulatory due diligence": SearchCheck,
 "Competition Commission of Pakistan filings & strategy": Scale,
 "Joint ventures & shareholder arrangements": Users,
 "Multi-jurisdictional transaction execution": Globe2,
 "Corporate governance & board advisory": Building2,
 "Regulatory compliance strategy & risk management": ShieldCheck,
 "Employment frameworks & HR policy": UserCog,
 "Contract negotiation & commercial advisory": FileSignature,
 "Government relations & regulatory liaison": Landmark,
 "Infrastructure & PPP advisory": Construction,
 "Stablecoin settlement advisory": CircleDollarSign,
 "Cross-border payments alignment": ArrowLeftRight,
 "Pakistan–UAE corridor structuring": Route,
 "Market entry planning & regulatory positioning": Compass,
 "SBP foreign exchange interface": Banknote,
};

/* ==========================================================================
   Services hub
   ========================================================================== */

export function ServicesPage() {
 return <>
  <PageHero label="Our expertise" icon={Scale} sealText="OUR EXPERTISE · FOUR CONNECTED PRACTICES · MS LAW · " title="Complex matters." italic="A clear way forward." description="Specialist regulatory and transaction counsel, built around the decisions that matter to your business." />
  <PracticeTiles />
  <Scenarios />
  <PracticeFinder />
 </>;
}

/* Four practices as image tiles: duotone photography, the description slides up on hover. */
function PracticeTiles() {
 return <section className="ms-section ms-screen ms-gap-after ms-svc-index">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Four connected practices</span><h2>From digital finance to <span className="ms-accent">corporate foundations.</span></h2></div>
    <p>Our expertise connects the detail with the bigger picture, from the frontiers of digital finance to the foundations of corporate business.</p>
   </div>
   <div className="ms-svc-tiles" data-reveal="repeat">
    {services.map((s, i) => {
     const Icon = practiceIcons[s.slug];
     return <Link key={s.slug} href={`/services/${s.slug}`} className="ms-svc-tile" style={order(i)}>
      <img src={`/images/${practiceImages[s.slug]}`} alt="" />
      <div className="ms-svc-tile-top"><span className="ms-svc-tile-icon"><Icon size={20} strokeWidth={1.5} /></span><span className="ms-svc-tile-go" aria-hidden="true"><ArrowUpRight size={20} /></span></div>
      <div className="ms-svc-tile-body">
       <span className="ms-svc-tile-label">{s.number} · {s.label}</span>
       <h3>{s.title}</h3>
       <p>{s.description}</p>
      </div>
     </Link>;
    })}
   </div>
  </div>
 </section>;
}

/* Practice finder: every area of advice as a chip; choosing one shows the practice that covers it. */
const allScope = services.flatMap(s => s.items.map(item => ({ item, slug: s.slug })));
function PracticeFinder() {
 const [picked, setPicked] = useState(0);
 const { item, slug } = allScope[picked];
 const s = services.find(p => p.slug === slug)!;
 const Icon = practiceIcons[slug];
 return <section className="ms-section ms-screen ms-gap-after ms-svc-finder">
  <div className="ms-wrap ms-svc-finder-grid">
   <div>
    <div className="ms-svc-finder-head" data-reveal>
     <span className="ms-kicker">Practice finder</span>
     <h2>I need help with<span className="ms-accent">…</span></h2>
    </div>
    <ul className="ms-svc-chips" data-reveal="repeat" aria-label="Areas of advice">
     {allScope.map((a, i) => <li key={a.item} style={order(i)}><button type="button" className={i === picked ? "is-active" : ""} aria-pressed={i === picked} onClick={() => setPicked(i)}>{a.item}</button></li>)}
    </ul>
   </div>
   <aside className="ms-svc-match" aria-live="polite" data-reveal>
    <span className="ms-svc-match-kicker">Handled by</span>
    <span className="ms-svc-match-icon" key={slug}><Icon size={26} strokeWidth={1.4} /></span>
    <h3 key={`t${slug}`}>{s.title}</h3>
    <p>{s.short}</p>
    <div className="ms-svc-match-item"><span>You selected</span><strong key={item}>{item}</strong></div>
    <Link className="ms-btn ms-btn-light" href={`/services/${slug}`}>Explore the practice <ArrowUpRight size={17} /></Link>
   </aside>
  </div>
 </section>;
}

/* ==========================================================================
   Service detail (one template for all four practices)
   ========================================================================== */

export function ServiceDetailPage({ slug }: { slug: string }) {
 const s = services.find(item => item.slug === slug)!;
 return <>
  <PageHero label={`Our expertise / ${s.label}`} icon={practiceIcons[s.slug]} sealText={`${s.label} · OUR EXPERTISE · MS LAW · `} title={s.title} description={s.short} />
  <Overview s={s} />
  <Capabilities s={s} />
  <Frameworks s={s} />
  <Stairs s={s} />
  <Prepare s={s} />
  <Questions s={s} />
 </>;
}

/* Overview: the practice statement and a navy "at a glance" panel for this practice only. */
function Overview({ s }: { s: Service }) {
 const Icon = practiceIcons[s.slug];
 return <section className="ms-section ms-screen ms-gap-after ms-svc-overview">
  <div className="ms-wrap ms-svc-overview-grid">
   <div className="ms-svc-overview-copy" data-reveal="repeat">
    <span className="ms-kicker">The practice</span>
    <h2>{s.intro}</h2>
    <p>{s.body}</p>
   </div>
   <aside className="ms-svc-glance" data-reveal="repeat">
    <div className="ms-svc-glance-top"><span className="ms-svc-glance-icon"><Icon size={24} strokeWidth={1.5} /></span><span>{s.label}</span></div>
    <dl>
     <div style={order(0)}><dt>In short</dt><dd>{s.short}</dd></div>
     <div style={order(1)}><dt>Scope</dt><dd>{s.items.length} areas of advice</dd></div>
     <div style={order(2)}><dt>Our approach</dt><dd>{s.steps.length} steps, from first question to clear direction</dd></div>
    </dl>
    <Link className="ms-btn ms-btn-light" href="/contact">Discuss this practice <ArrowUpRight size={17} /></Link>
   </aside>
  </div>
 </section>;
}

/* Capabilities: one card per area of advice, each with its own icon; the card turns navy on hover. */
function Capabilities({ s }: { s: Service }) {
 return <section className="ms-section ms-screen ms-gap-after ms-svc-caps">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">How we can help</span><h2>Areas of advice <span className="ms-accent">within the practice.</span></h2></div>
    <p>{s.description}</p>
   </div>
   <ul className="ms-svc-caps-grid" data-reveal="repeat">
    {s.items.map((item, i) => {
     const Icon = scopeIcons[item] ?? ArrowRight;
     return <li key={item} className="ms-svc-cap" style={order(i)}>
      <Icon className="ms-svc-cap-mark" strokeWidth={.8} aria-hidden="true" />
      <div className="ms-svc-cap-top"><span className="ms-svc-cap-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="ms-svc-cap-num">{String(i + 1).padStart(2, "0")}</span></div>
      <h3>{item}</h3>
     </li>;
    })}
   </ul>
  </div>
 </section>;
}

/* Approach: three steps drawn as a rising staircase; each block grows up from the floor. */
function Stairs({ s }: { s: Service }) {
 return <section className="ms-section ms-screen ms-gap-after ms-svc-stairs">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Our approach</span><h2>Three steps, <span className="ms-accent">each building on the last.</span></h2></div>
    <p>How a {s.title.toLowerCase()} mandate typically moves from first question to clear direction.</p>
   </div>
   <ol className="ms-svc-steps" data-reveal="repeat">
    {s.steps.map((step, i) => <li key={step} style={order(i)}>
     <div className="ms-svc-step">
      <span className="ms-svc-step-label">Step 0{i + 1}</span>
      <p>{step}</p>
      <span className="ms-svc-step-num" aria-hidden="true">0{i + 1}</span>
     </div>
    </li>)}
   </ol>
  </div>
 </section>;
}

/* Questions: who the practice serves on a navy card, and an animated accordion of common questions. */
function Questions({ s }: { s: Service }) {
 const [open, setOpen] = useState(0);
 return <section className="ms-section ms-screen ms-svc-faq">
  <div className="ms-wrap ms-svc-faq-grid">
   <aside className="ms-svc-audience" data-reveal="repeat">
    <span className="ms-kicker ms-kicker-light">Who we advise</span>
    <p className="ms-svc-audience-text">{s.audience}</p>
    <div className="ms-svc-audience-foot">
     <p>Have a question about your own circumstances?</p>
     <Link className="ms-btn ms-btn-light" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
    </div>
   </aside>
   <div>
    <div className="ms-svc-faq-head" data-reveal>
     <span className="ms-kicker">Common questions</span>
     <h2>Useful <span className="ms-accent">starting points.</span></h2>
    </div>
    <div className="ms-svc-acc" data-reveal="repeat">
     {s.faqs.map(([q, a], i) => {
      const id = `${s.slug}-faq-${i}`;
      return <div key={q} className={`ms-svc-acc-item${open === i ? " is-open" : ""}`} style={order(i)}>
       <h3><button type="button" aria-expanded={open === i} aria-controls={id} onClick={() => setOpen(open === i ? -1 : i)}>
        <span className="ms-svc-acc-num">0{i + 1}</span><span>{q}</span><span className="ms-svc-acc-icon" aria-hidden="true"><Plus size={18} /></span>
       </button></h3>
       <div className="ms-svc-acc-panel" id={id} role="region"><div><p>{a}</p></div></div>
      </div>;
     })}
    </div>
   </div>
  </div>
 </section>;
}

/* Frameworks: the instruments that shape the practice, as layered strata that slide in one after another. */
function Frameworks({ s }: { s: Service }) {
 const list = frameworks[s.slug] ?? [];
 return <section className="ms-section ms-screen ms-gap-after ms-svc-law">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">The legal landscape</span><h2>The frameworks <span className="ms-accent">behind this practice.</span></h2></div>
    <p>The laws, regulators and processes that most often shape {s.title.toLowerCase()} matters in Pakistan.</p>
   </div>
   <ol className="ms-svc-strata" data-reveal="repeat">
    {list.map((f, i) => <li key={f.name} style={order(i)}>
     <span className="ms-svc-stratum-num">{String(i + 1).padStart(2, "0")}</span>
     <span className="ms-svc-stratum-tag">{f.tag}</span>
     <h3>{f.name}</h3>
     <p>{f.body}</p>
    </li>)}
   </ol>
  </div>
 </section>;
}

/* Prepare: what helps a first conversation, as a navy checklist whose ticks draw in one by one. */
function Prepare({ s }: { s: Service }) {
 const items = prepare[s.slug] ?? [];
 return <section className="ms-section ms-screen ms-gap-after ms-svc-prep">
  <div className="ms-wrap ms-svc-prep-grid">
   <div className="ms-svc-prep-copy" data-reveal>
    <span className="ms-kicker">Before we speak</span>
    <h2>What helps a <span className="ms-accent">first conversation.</span></h2>
    <p>None of this is required to get in touch. Having it to hand simply lets an initial discussion go further, faster.</p>
    <Link className="ms-btn ms-btn-dark" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
   </div>
   <ul className="ms-svc-check" data-reveal="repeat">
    {items.map((item, i) => <li key={item} style={order(i)}>
     <svg className="ms-svc-check-box" viewBox="0 0 28 28" aria-hidden="true"><rect x="1" y="1" width="26" height="26" rx="8" /><path d="M8 14.5l4 4 8-9" pathLength={1} /></svg>
     <span>{item}</span>
    </li>)}
   </ul>
  </div>
 </section>;
}

/* Hub: typical matters that draw on more than one practice, each drawn as a route between practice stops. */
function Scenarios() {
 return <section className="ms-section ms-screen ms-gap-after ms-svc-routes">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div><span className="ms-kicker">Where practices meet</span><h2>Most matters cross <span className="ms-accent">more than one line.</span></h2></div>
    <p>Typical situations where regulatory, transactional and corporate questions arrive together.</p>
   </div>
   <div className="ms-svc-route-grid" data-reveal="repeat">
    {scenarios.map((sc, i) => <article key={sc.title} className="ms-svc-route" style={order(i)}>
     <span className="ms-svc-route-num">Scenario 0{i + 1}</span>
     <h3>{sc.title}</h3>
     <p>{sc.body}</p>
     <ol className="ms-svc-route-stops">
      {sc.slugs.map((slug, k) => { const p = services.find(x => x.slug === slug)!; const Icon = practiceIcons[slug]; return <li key={slug} style={order(k)}>
       <Link href={`/services/${slug}`}><span className="ms-svc-route-dot"><Icon size={16} strokeWidth={1.6} /></span>{p.title}</Link>
      </li>; })}
     </ol>
    </article>)}
   </div>
  </div>
 </section>;
}
