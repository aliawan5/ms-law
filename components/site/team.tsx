import type { CSSProperties } from "react";
import { ArrowUpRight, Mail, Users } from "lucide-react";
import { linkedin } from "@/lib/content";
import { teamContent } from "@/lib/team-content";
import { PageHero } from "./ui";
import "@/app/pages/team-privacy-404.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

const quote: [string, boolean][] = [
 ["The", false], ["right", false], ["advice", false], ["begins", false], ["with", false], ["understanding", false],
 ["what", true], ["matters", true], ["to", true], ["you.", true],
];

function Leadership() {
 return <section id="mariam-saleem" className="ms-section ms-screen ms-gap-after ms-team-lead" aria-labelledby="team-lead-name">
  <figure className="ms-team-lead-media" data-reveal="repeat">
   <div className="ms-team-lead-frame">
    <img src="/images/mariam-saleem-ms-law.webp" alt="Mariam Saleem, Founder of MS Law" width={1500} height={1500} />
   </div>
  </figure>
  <div className="ms-wrap ms-team-lead-inner">
  <div className="ms-team-lead-copy" data-reveal>
   <span className="ms-kicker" style={i(0)}>Founder</span>
   <h2 id="team-lead-name" style={i(1)}>{teamContent.founderName}</h2>
   <p className="ms-team-lead-line" style={i(2)}>{teamContent.founderRole}</p>
   <p className="ms-team-lead-body" style={i(3)}>{teamContent.founderBio}</p>
   <div className="ms-team-lead-actions" style={i(4)}>
    <a className="ms-btn ms-btn-dark" href="mailto:ms@mariamsaleemlaw.com">Email Mariam <Mail size={17} aria-hidden="true" /></a>
    <a className="ms-team-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
    <a className="ms-team-link" href="/insights-and-media/">{teamContent.columnsLabel} <ArrowUpRight size={16} aria-hidden="true" /></a>
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
   </div>
   <figure className="ms-team-note-figure">
    <span className="ms-team-note-glyph" aria-hidden="true">“</span>
    <blockquote>
     <p className="ms-team-note-quote">
      {quote.map(([word, accent], n) => <span key={n}><span className={`ms-team-word${accent ? " ms-accent" : ""}`} style={i(n)}>{word}</span>{n < quote.length - 1 ? " " : ""}</span>)}
     </p>
     <p className="ms-team-note-body">Our vision for MS Law is a practice that brings careful thought to a fast-moving world. We want every client to feel that the complexity has been considered, the context understood and the way forward made clearer.</p>
    </blockquote>
    <figcaption><strong>{teamContent.founderName}</strong><span>{teamContent.founderRole}</span></figcaption>
   </figure>
  </div>
 </section>;
}

function Associate() {
 return <section id="syeda-muskan-ali-zaidi" className="ms-section ms-screen ms-gap-after ms-team-assoc" aria-labelledby="team-assoc-title">
  <div className="ms-wrap">
   <div className="ms-head" data-reveal>
    <div>
     <span className="ms-kicker">Associate</span>
     <h2 id="team-assoc-title">Syeda Muskan<br /><span className="ms-accent">Ali Zaidi</span></h2>
    </div>
    <p>{teamContent.associateRole}</p>
   </div>
   <article className="ms-team-card" data-reveal aria-labelledby="team-assoc-name">
    <div className="ms-team-card-who">
     <div className="ms-team-avatar">
      <svg className="ms-team-avatar-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48.5" pathLength="1" /></svg>
      <div className="ms-team-avatar-img"><img src="/images/syeda-muskan-ali-zaidi-ms-law.webp" alt="Syeda Muskan Ali Zaidi, Associate Counsel, MS Law" width={828} height={828} /></div>
     </div>
     <div className="ms-team-card-id">
      <h3 id="team-assoc-name">{teamContent.associateName}</h3>
      <span className="ms-team-card-role">{teamContent.associateRole}</span>
      <p>{teamContent.associateBio}</p>
      <a className="ms-team-mail" href="mailto:smaz@mariamsaleemlaw.com"><Mail size={16} aria-hidden="true" /><span>smaz@<wbr />mariamsaleemlaw.com</span></a>
     </div>
    </div>
    <dl className="ms-team-card-facts">
     <div style={i(0)}><dt>Focus</dt><dd><ul className="ms-team-tags"><li>Digital assets</li><li>Fintech regulation</li><li>Corporate transactions</li></ul></dd></div>
     <div style={i(1)}><dt>Experience</dt><dd>State Bank of Pakistan · Legal 500-ranked law firms</dd></div>
     <div style={i(2)}><dt>Credential</dt><dd>LLB (Hons), University of London</dd></div>
    </dl>
   </article>
  </div>
 </section>;
}

export function TeamPage() {
 return <>
  <PageHero label="OUR TEAM" icon={Users} sealText="OUR PEOPLE · EXPERIENCE · PERSPECTIVE · MS LAW · " title={teamContent.heading} description={teamContent.intro} />
  <Leadership />
  <FounderNote />
  <Associate />
 </>;
}
