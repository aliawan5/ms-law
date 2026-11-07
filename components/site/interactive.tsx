"use client";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import Link from "./link";
import { ArrowUpRight, CircleAlert, CircleCheck, Send } from "lucide-react";
import { sendEnquiry } from "@/lib/send-enquiry";
import { insightsArticles } from "@/lib/insights-content";
import { contactContent, clientTypes, enquiryAreas, virtualAssetActivities, referralSources } from "@/lib/contact-content";
import "@/app/pages/insights-contact.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;

/* ---------- Insights: editorial layout ----------
   The newest piece in the current filter is a large feature card; the rest sit beside it as compact
   cards with a thumbnail. The lead story (articles[0]) and Video items appear elsewhere on the page. */
const archive = insightsArticles.slice(1);
const filters = ["All", "Analysis", "Interviews"] as const;
type Filter = typeof filters[number];
const kind = (c: string) => c === "Interviews" ? "Interview" : c;

export function InsightsExplorer() {
 const [filter, setFilter] = useState<Filter>("All");
 const shown = archive.filter(a => filter === "All" || a.category === filter);
 const [feature, ...rest] = shown;
 const at = filters.indexOf(filter);
 return <div className="ms-ins-ed">
  <div className="ms-ins-tabs" role="group" aria-label="Filter by type" style={order(at)}>
   <span className="ms-ins-tabs-thumb" aria-hidden="true" />
   {filters.map(f => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
    {f}<sup aria-label={`, ${archive.filter(a => f === "All" || a.category === f).length} items`}>{archive.filter(a => f === "All" || a.category === f).length}</sup>
   </button>)}
  </div>
  <div className={`ms-ins-ed-grid${rest.length ? "" : " is-single"}`} key={filter} data-reveal>
   {feature && <a className="ms-ins-feature" href={feature.url} target="_blank" rel="noreferrer">
    <div className="ms-ins-feature-media"><img src={`/images/${feature.image}`} alt="" /><span className="ms-ins-feature-tag">{kind(feature.category)}</span></div>
    <div className="ms-ins-feature-body">
     <span className="ms-ins-feature-meta">{feature.source} · <time>{feature.date}</time></span>
     <h3>{feature.title}</h3>
     <p>{feature.description}</p>
     <span className="ms-ins-feature-read">Read article <span className="ms-ins-feature-arrow"><ArrowUpRight size={18} /></span></span>
    </div>
    <span className="sr-only"> (opens in a new tab)</span>
   </a>}
   {rest.length > 0 && <ul className="ms-ins-cards">
    {rest.map((a, i) => <li key={a.url} style={order(i)}>
     <a className="ms-ins-card" href={a.url} target="_blank" rel="noreferrer">
      <span className="ms-ins-card-thumb" aria-hidden="true"><img src={`/images/${a.image}`} alt="" /></span>
      <span className="ms-ins-card-text">
       <span className="ms-ins-card-meta">{a.source} · <time>{a.date}</time></span>
       <span className="ms-ins-card-title">{a.title}</span>
       <span className="ms-ins-card-summary">{a.description}</span>
      </span>
      <ArrowUpRight className="ms-ins-card-go" size={18} aria-hidden="true" />
      <span className="sr-only"> ({a.source}, opens in a new tab)</span>
     </a>
    </li>)}
   </ul>}
  </div>
 </div>;
}


/* ---------- Contact: enquiry form ----------
   After validation the enquiry is sent straight to the firm's inbox (lib/send-enquiry.ts). */
const firmEmail = contactContent.email;
const MESSAGE_MAX = 1500;
type Field = "name" | "email" | "company" | "phone" | "country" | "clientType" | "referral" | "area" | "activity" | "message" | "consent";
const required: Field[] = ["name", "email", "clientType", "area", "consent"];

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
function messageFor(el: Control): string {
 if (el.name === "name") el.setCustomValidity(el.value.trim() ? "" : "missing");
 const v = el.validity;
 if (v.valid) return "";
 switch (el.name as Field) {
  case "name": return "Please enter your full name.";
  case "email": return v.valueMissing ? "Please enter your email address." : "Please enter a valid email address, for example name@company.com.";
  case "clientType": return "Please choose the option that describes you.";
  case "area": return "Please choose how we can help.";
  case "consent": return "Please confirm you agree to the privacy notice.";
  default: return "Please check this field.";
 }
}

/** Turns the form values into the email the firm receives. */
function buildEnquiry(data: Record<string, string>) {
 const area = enquiryAreas.find(([value]) => value === data.area)?.[1] ?? data.area;
 const fields: Record<string, string> = {
  "Name": data.name,
  "Email": data.email,
  "I am a": data.clientType,
  ...(data.company ? { "Company": data.company } : {}),
  ...(data.phone ? { "Phone": data.phone } : {}),
  ...(data.country ? { "Country": data.country } : {}),
  "How can we help?": area,
  ...(data.area === "virtual-assets" && data.activity ? { "Virtual asset activity": data.activity } : {}),
  ...(data.referral ? { "How did you hear about us?": data.referral } : {}),
  "Message": data.message || "(no message)",
  "Consent": "Agreed to the use of these details to respond to this enquiry, as described in the privacy notice.",
 };
 return { subject: `Website enquiry: ${area} – ${data.name}`, fields };
}

export function ContactForm() {
 const formRef = useRef<HTMLFormElement>(null);
 const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
 const [attempted, setAttempted] = useState(false);
 const [area, setArea] = useState("");
 const [length, setLength] = useState(0);
 const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

 const check = (el: EventTarget | null) => {
  if (!attempted || !el || !("name" in el)) return;
  const field = el as Control;
  if (!required.includes(field.name as Field)) return;
  setErrors(prev => ({ ...prev, [field.name]: messageFor(field) }));
 };

 const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  setAttempted(true);
  const next: Partial<Record<Field, string>> = {};
  let first: HTMLElement | null = null;
  for (const name of required) {
   const el = form.elements.namedItem(name) as Control | null;
   if (!el) continue;
   const msg = messageFor(el);
   if (msg) { next[name] = msg; first ??= el; }
  }
  setErrors(next);
  if (first) { first.focus(); return; }
  const data = Object.fromEntries([...new FormData(form).entries()].map(([k, v]) => [k, String(v).trim()]));
  if (data._honey) return; // filled only by spam bots
  const { subject, fields } = buildEnquiry(data);
  setStatus("sending");
  sendEnquiry(subject, fields, data.email)
   .then(() => { setStatus("sent"); form.reset(); setArea(""); setLength(0); setAttempted(false); })
   .catch(() => setStatus("error"));
 };

 const field = (name: Field) => ({
  name, id: `enquiry-${name}`,
  "aria-invalid": errors[name] ? true : undefined,
  "aria-describedby": errors[name] ? `enquiry-${name}-error` : undefined,
  onBlur: (e: { target: EventTarget | null }) => check(e.target),
 });
 const error = (name: Field) => errors[name] ? <p className="ms-contact-error" id={`enquiry-${name}-error`}><CircleAlert size={16} aria-hidden="true" />{errors[name]}</p> : null;

 return <form ref={formRef} className="ms-contact-form" noValidate onSubmit={submit} aria-labelledby="enquiry-title"
  onChange={e => { const t = e.target as unknown as Control; if (t.name === "message") setLength(t.value.trim().length); if (attempted && errors[t.name as Field]) check(t); }}>
  <div className="ms-contact-form-head">
   <h3 className="ms-kicker" id="enquiry-title">{contactContent.formHeading}</h3>
   <p>Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>
  </div>
  <div className="ms-contact-grid">
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-name">Name <span aria-hidden="true">*</span></label>
    <input {...field("name")} autoComplete="name" required maxLength={120} placeholder="Your full name" />
    {error("name")}
   </div>
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-email">Email <span aria-hidden="true">*</span></label>
    <input {...field("email")} type="email" autoComplete="email" required maxLength={254} placeholder="name@company.com" />
    {error("email")}
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-company">Company name</label>
    <input {...field("company")} autoComplete="organization" maxLength={180} />
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-phone">Phone, with country code</label>
    <input {...field("phone")} type="tel" autoComplete="tel" maxLength={40} placeholder="With country code" />
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-country">Country</label>
    <input {...field("country")} autoComplete="country-name" maxLength={120} />
   </div>
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-clientType">I am a <span aria-hidden="true">*</span></label>
    <select {...field("clientType")} defaultValue="" required>
     <option value="" disabled>Select an option</option>
     {clientTypes.map(type => <option key={type} value={type}>{type}</option>)}
    </select>
    {error("clientType")}
   </div>
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-referral">How did you hear about us?</label>
    <select {...field("referral")} defaultValue="">
     <option value="">Select an option</option>
     {referralSources.map(source => <option key={source} value={source}>{source}</option>)}
    </select>
   </div>
   <div className={`ms-contact-field ${area === "virtual-assets" ? "ms-span-3" : "ms-span-6"}`}>
    <label htmlFor="enquiry-area">How can we help? <span aria-hidden="true">*</span></label>
    <select {...field("area")} required value={area} onChange={e => setArea(e.target.value)}>
     <option value="" disabled>Select an option</option>
     {enquiryAreas.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
    </select>
    {error("area")}
   </div>
   {area === "virtual-assets" && <div className="ms-contact-field ms-span-3 ms-contact-extra">
    <label htmlFor="enquiry-activity">Virtual asset activity <span className="ms-contact-optional">(optional)</span></label>
    <select {...field("activity")} defaultValue="">
     <option value="">Select an activity</option>
     {virtualAssetActivities.map(a => <option key={a} value={a}>{a}</option>)}
    </select>
   </div>}
   <div className="ms-contact-field ms-span-6">
    <div className="ms-contact-label-row">
     <label htmlFor="enquiry-message">Tell us about your matter</label>
     <span className="ms-contact-count" aria-hidden="true">{length} / {MESSAGE_MAX}</span>
    </div>
    <textarea {...field("message")} maxLength={MESSAGE_MAX} rows={3} placeholder="A brief overview of your business and the question in front of you" />
    {error("message")}
   </div>
   <div className="ms-contact-field ms-span-6">
    <label className="ms-contact-consent">
     <input {...field("consent")} type="checkbox" value="yes" required />
     <span>I agree to the use of my details to respond to this enquiry, as described in the <Link href="/privacy">privacy notice</Link>. <span aria-hidden="true">*</span></span>
    </label>
    {error("consent")}
   </div>
  </div>
  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="ms-contact-trap" />
  <div className="ms-contact-actions">
   <button type="submit" className="ms-btn ms-btn-light" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Enquiry"} <Send size={17} aria-hidden="true" /></button>
  </div>
  <div role="status" aria-live="polite">
   {status === "sent" && <p className="ms-contact-composed is-sent"><CircleCheck size={18} aria-hidden="true" />Thank you. Your enquiry has been sent and we will be in touch shortly.</p>}
   {status === "error" && <p className="ms-contact-composed is-error"><CircleAlert size={18} aria-hidden="true" />Your enquiry could not be sent. Please try again, or email us at <a href={`mailto:${firmEmail}`}>{firmEmail}</a>.</p>}
  </div>
 </form>;
}
