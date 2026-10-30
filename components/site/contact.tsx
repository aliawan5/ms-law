import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Copy, FileText, MessageSquareText, Scale } from "lucide-react";
import { PageHero } from "./ui";
import { ContactForm } from "./interactive";
import "@/app/pages/insights-contact.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;
const email = "info@mariamsaleemlaw.com";

const steps = [
 ["A first conversation", "A complimentary 15–30 minute telephone or video call to understand your circumstances."],
 ["A clear engagement", "If you choose to proceed, an engagement agreement is shared before any work begins."],
 ["Advice in context", "Advice focused on your business, the relevant framework and the decision ahead."],
] as const;

export function ContactPage() {
 return <>
  <PageHero label="Contact" title="Good advice begins" italic="with a conversation." description="Tell us about your business, your challenge or your next chapter." icon={MessageSquareText} sealText="START A CONVERSATION · ISLAMABAD · MS LAW · " />

  <section className="ms-section ms-screen ms-gap-after ms-contact-reach" aria-labelledby="contact-reach-title">
   <div className="ms-wrap ms-contact-layout">
    <div className="ms-contact-intro" data-reveal>
     <span className="ms-kicker">Reach us</span>
     <h2 id="contact-reach-title">Your context. <span className="ms-accent">Our attention.</span></h2>
     <p>Write to the firm directly, or use the enquiry form to share a short overview of your business and the question in front of you.</p>
     <EmailRow />
     <ul className="ms-contact-notes">
      <li><FileText size={18} aria-hidden="true" /><span>Please share only an initial overview. Avoid sending confidential documents or sensitive personal details at this stage.</span></li>
      <li><Scale size={18} aria-hidden="true" /><span>An enquiry does not establish a lawyer–client relationship.</span></li>
     </ul>
    </div>
    <div className="ms-contact-card" data-reveal>
     <ContactForm />
    </div>
   </div>
  </section>

  <section className="ms-section ms-screen ms-contact-next" aria-labelledby="contact-next-title">
   <div className="ms-wrap">
    <div className="ms-head" data-reveal>
     <div><span className="ms-kicker">What happens next</span><h2 id="contact-next-title">A clear path <span className="ms-accent">from the first call.</span></h2></div>
    </div>
    <ol className="ms-contact-steps" data-reveal="repeat">
     {steps.map(([title, body], i) => <li key={title} style={order(i)}>
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
   <span className="ms-contact-email-label">Write directly</span>
   <span className="ms-contact-email-address">{email}</span>
   <ArrowUpRight className="ms-contact-email-arrow" size={22} aria-hidden="true" />
  </a>
  <button type="button" className="ms-contact-copy" onClick={copy} aria-label={copied ? "Email address copied" : "Copy email address"}>
   {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
   <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
  </button>
 </div>;
}
