import type { CSSProperties } from "react";
import { ArrowUpRight, Mail, Users } from "lucide-react";
import { linkedin } from "@/lib/content";
import { PageHero } from "./ui";
import "@/app/pages/team-privacy-404.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;


/* Proposed founder message: words fade in one after another. The second clause is set in steel. */
const quote: [string, boolean][] = [
 ["The", false], ["right", false], ["advice", false], ["begins", false], ["with", false], ["understanding", false],
 ["what", true], ["matters", true], ["to", true], ["you.", true],
];

function Leadership() {
 return <section className="ms-section ms-screen ms-gap-after ms-team-lead" aria-labelledby="team-lead-name">
  <figure className="ms-team-lead-media" data-reveal="repeat">
   <div className="ms-team-lead-frame">
    <img src="/images/mariam-saleem-ms-law.webp" alt="Mariam Saleem, Founder of MS Law" width={1500} height={1500} />
   </div>
  </figure>
  <div className="ms-wrap ms-team-lead-inner">
  <div className="ms-team-lead-copy" data-reveal>
   <span className="ms-kicker" style={i(0)}>Founding Partner</span>
   <h2 id="team-lead-name" style={i(1)}>Mariam Saleem</h2>
   <p className="ms-team-lead-line" style={i(2)}>An international outlook. <span className="ms-accent">A specialist perspective on Pakistan’s next chapter.</span></p>
   <p className="ms-team-lead-body" style={i(3)}>Mariam leads MS Law’s regulatory and transactional work, advising on VASP structuring, stablecoin and RWA tokenization, sandbox and NOC strategy and the SBP foreign exchange interface.</p>
   <div className="ms-team-lead-actions" style={i(4)}>
    <a className="ms-btn ms-btn-dark" href="mailto:ms@mariamsaleemlaw.com">Email Mariam <Mail size={17} aria-hidden="true" /></a>
    <a className="ms-team-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
    <a className="ms-team-link" href="/#story">Read her story <ArrowUpRight size={16} aria-hidden="true" /></a>
   </div>
  </div>
  </div>
 </section>;
}

function FounderNote() {
 return <section className="ms-section ms-screen ms-team-note" aria-labelledby="team-note-title">
  <div className="ms-wrap ms-team-note-inner" data-reveal>
   <div className="ms-team-note-top">
    <h2 id="team-note-title" className="ms-kicker ms-kicker-light">A note from the founder</h2>
    <span className="ms-team-draft">Proposed copy · for founder approval</span>
   </div>
   <figure className="ms-team-note-figure">
    <span className="ms-team-note-glyph" aria-hidden="true">“</span>
    <blockquote>
     <p className="ms-team-note-quote">
      {quote.map(([word, accent], n) => <span key={n}><span className={`ms-team-word${accent ? " ms-accent" : ""}`} style={i(n)}>{word}</span>{n < quote.length - 1 ? " " : ""}</span>)}
     </p>
     <p className="ms-team-note-body">Our vision for MS Law is a practice that brings careful thought to a fast-moving world. We want every client to feel that the complexity has been considered, the context understood and the way forward made clearer.</p>
    </blockquote>
    <figcaption><strong>Mariam Saleem</strong><span>Founding Partner, MS Law</span></figcaption>
   </figure>
  </div>
 </section>;
}

function Associate() {
 return <section className="ms-section ms-screen ms-gap-after ms-team-assoc" aria-labelledby="team-assoc-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div>
     <span className="ms-kicker">Associate</span>
     <h2 id="team-assoc-title">Depth in research.<br /><span className="ms-accent">Focus on fintech.</span></h2>
    </div>
    <p>Working as associate counsel on complex commercial matters and technology regulation.</p>
   </div>
   <article className="ms-team-card" data-reveal aria-labelledby="team-assoc-name">
    <div className="ms-team-card-who">
     <div className="ms-team-avatar">
      <svg className="ms-team-avatar-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48.5" pathLength="1" /></svg>
      <div className="ms-team-avatar-img"><img src="/images/syeda-muskan-ali-zaidi-ms-law.webp" alt="Syeda Muskan Ali Zaidi, Associate Counsel" width={828} height={828} /></div>
     </div>
     <div className="ms-team-card-id">
      <h3 id="team-assoc-name">Syeda Muskan Ali Zaidi</h3>
      <span className="ms-team-card-role">Associate Counsel</span>
      <p>Research experience in financial technology regulation and cross-border compliance, applied to commercial and technology matters.</p>
      <a className="ms-team-mail" href="mailto:smaz@mariamsaleemlaw.com"><Mail size={16} aria-hidden="true" /><span>smaz@mariamsaleemlaw.com</span></a>
     </div>
    </div>
    <dl className="ms-team-card-facts">
     <div style={i(0)}><dt>Focus</dt><dd><ul className="ms-team-tags"><li>Digital assets</li><li>Fintech</li><li>Corporate transactional law</li></ul></dd></div>
     <div style={i(1)}><dt>Experience</dt><dd>State Bank of Pakistan · Legal 500 ranked law firms</dd></div>
     <div style={i(2)}><dt>Credential</dt><dd>LL.B. (Hons), University of London</dd></div>
    </dl>
   </article>
  </div>
 </section>;
}

export function TeamPage() {
 return <>
  <PageHero label="OUR TEAM" icon={Users} sealText="OUR PEOPLE · EXPERIENCE · PERSPECTIVE · MS LAW · " title="The people behind" italic="your next step." description="Experience, independent thinking and a shared commitment to considered legal advice." />
  <Leadership />
  <FounderNote />
  <Associate />
 </>;
}
