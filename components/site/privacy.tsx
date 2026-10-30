import { useEffect, useRef, useState, type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "./ui";
import "@/app/pages/team-privacy-404.css";

type Clause = { id: string; title: string; short: string; body: ReactNode };

const clauses: Clause[] = [
 {
  id: "enquiries", title: "Enquiries and personal information", short: "Enquiries",
  body: <>
   <p>Enquiries are made by email. The email links on this website open your own email application, and correspondence is handled directly by the firm.</p>
   <p>Please do not include confidential documents, identity documents, financial account details or other sensitive personal information in a first enquiry.</p>
  </>,
 },
 {
  id: "requests", title: "Contact and requests", short: "Requests",
  body: <p>For questions about an enquiry, or to ask for information you have shared to be corrected or deleted, write to <a href="mailto:info@mariamsaleemlaw.com">info@mariamsaleemlaw.com</a>.</p>,
 },
 {
  id: "external-links", title: "External links", short: "External links",
  body: <p>This website links to publications, LinkedIn and video platforms. Those websites are operated by third parties and have their own privacy practices, which apply when you visit them.</p>,
 },
 {
  id: "general-information", title: "General information", short: "General information",
  body: <p>The content on this website is general information. It is not legal advice and should not be relied on for a particular matter. Articles and interviews reflect the position at their original publication dates.</p>,
 },
 {
  id: "engagement", title: "Professional engagement", short: "Engagement",
  body: <p>Sending an enquiry or taking part in an initial discussion does not create a lawyer–client relationship. An engagement agreement is put in place before any work begins.</p>,
 },
];

export function PrivacyPage() {
 const [active, setActive] = useState(clauses[0].id);
 const chips = useRef<HTMLOListElement>(null);

 // Highlight the last clause whose heading has passed the reading line just below the sticky header/contents bar.
 useEffect(() => {
  const nodes = clauses.map(c => document.getElementById(c.id)).filter((n): n is HTMLElement => !!n);
  let frame = 0;
  const update = () => {
   frame = 0;
   const line = (parseFloat(getComputedStyle(nodes[0]).scrollMarginTop) || 120) + 48;
   let current = nodes[0].id;
   for (const n of nodes) if (n.getBoundingClientRect().top <= line) current = n.id;
   setActive(current);
  };
  const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
 }, []);

 // On small screens the contents become a horizontal chip row: keep the active chip in view.
 useEffect(() => {
  const row = chips.current;
  const link = row?.querySelector<HTMLElement>(`[data-target="${active}"]`);
  if (!row || !link || row.scrollWidth <= row.clientWidth) return;
  const left = link.offsetLeft - (row.clientWidth - link.offsetWidth) / 2;
  row.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
 }, [active]);

 return <>
  <PageHero label="PRIVACY & LEGAL" icon={ShieldCheck} sealText="PRIVACY · YOUR INFORMATION · LEGAL NOTICE · MS LAW · " title="A considered approach" italic="to your information." description="How this website handles enquiries, and what to know before sharing information." />
  <section className="ms-section ms-gap-after ms-privacy" aria-label="Privacy and legal notice">
   <div className="ms-wrap ms-privacy-grid">
    <nav className="ms-privacy-toc" aria-label="On this page" data-reveal>
     <span className="ms-kicker">On this page</span>
     <ol ref={chips}>
      {clauses.map((c, n) => <li key={c.id}>
       <a href={`#${c.id}`} data-target={c.id} aria-current={active === c.id ? "location" : undefined} className={active === c.id ? "is-active" : undefined}>
        <span className="ms-privacy-toc-num" aria-hidden="true">{n + 1}</span>
        <span className="ms-privacy-toc-long">{c.title}</span>
        <span className="ms-privacy-toc-short" aria-hidden="true">{c.short}</span>
       </a>
      </li>)}
     </ol>
    </nav>
    <article className="ms-privacy-doc">
     <p className="ms-privacy-updated" data-reveal>Last updated: October 2026</p>
     {clauses.map((c, n) => <section key={c.id} id={c.id} className="ms-privacy-clause" aria-labelledby={`${c.id}-title`} data-reveal>
      <h2 id={`${c.id}-title`}><span className="ms-privacy-clause-num">{n + 1}.</span> {c.title}</h2>
      {c.body}
     </section>)}
    </article>
   </div>
  </section>
 </>;
}
