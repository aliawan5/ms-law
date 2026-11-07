import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Copy, MessageSquareText } from "lucide-react";
import { PageHero } from "./ui";
import { ContactForm } from "./interactive";
import { contactContent, contactSteps } from "@/lib/contact-content";
import "@/app/pages/insights-contact.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;
const email = contactContent.email;

export function ContactPage() {
 return <>
  <PageHero label="Contact" title={contactContent.heading} description={contactContent.intro} icon={MessageSquareText} sealText="START A CONVERSATION · ISLAMABAD · MS LAW · " />

  <section className="ms-section ms-screen ms-gap-after ms-contact-reach" aria-labelledby="contact-reach-title">
   <div className="ms-wrap ms-contact-layout">
    <div className="ms-contact-intro" data-reveal>
     <span className="ms-kicker">Reach us</span>
     <h2 id="contact-reach-title">Book a Free <span className="ms-accent">Initial Consultation</span></h2>
     <p>{contactContent.consultation}</p>
     <EmailRow />
    </div>
    <div className="ms-contact-card" data-reveal>
     <ContactForm />
    </div>
   </div>
  </section>

  <section className="ms-section ms-screen ms-contact-next" aria-labelledby="contact-next-title">
   <div className="ms-wrap">
    <div className="ms-head" data-reveal>
     <div><span className="ms-kicker">From the first call</span><h2 id="contact-next-title">What Happens <span className="ms-accent">Next</span></h2></div>
    </div>
    <ol className="ms-contact-steps" data-reveal="repeat">
     {contactSteps.map(([title, body], i) => <li key={title} style={order(i)}>
      <span className="ms-contact-num" aria-hidden="true"><span>0{i + 1}</span></span>
      <h3><span className="sr-only">Step {i + 1}: </span>{title}</h3>
      <p>{body}</p>
     </li>)}
    </ol>
   </div>
  </section>
 </>;
}

/** The firm's address as one prominent row, with a copy button for people who use webmail. */
function EmailRow() {
 const [copied, setCopied] = useState(false);
 const timer = useRef(0);
 useEffect(() => () => window.clearTimeout(timer.current), []);
 const copy = async () => {
  try { await navigator.clipboard.writeText(email); } catch { return; }
  setCopied(true);
  window.clearTimeout(timer.current);
  timer.current = window.setTimeout(() => setCopied(false), 2400);
 };
 return <div className="ms-contact-email">
  <a href={`mailto:${email}`} className="ms-contact-email-link">
   <span className="ms-contact-email-label">{contactContent.detailsHeading}</span>
   <span className="ms-contact-email-address">info@<wbr />mariamsaleemlaw.com</span>
   <ArrowUpRight className="ms-contact-email-arrow" size={22} aria-hidden="true" />
  </a>
  <button type="button" className="ms-contact-copy" onClick={copy} aria-label={copied ? "Email address copied" : "Copy email address"}>
   {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
   <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
  </button>
 </div>;
}
