"use client";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import Link from "./link";
import { ArrowUpRight, CircleAlert, Mail } from "lucide-react";
import { services, articles } from "@/lib/content";
import "@/app/pages/insights-contact.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;

/* ---------- Insights: editorial layout ----------
   The newest piece in the current filter is a large feature card; the rest sit beside it as compact
   cards with a thumbnail. The lead story (articles[0]) and Video items appear elsewhere on the page. */
const archive = articles.filter((a, i) => i > 0 && a.category !== "Video");
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
     <span className="ms-ins-feature-read">Read the piece <span className="ms-ins-feature-arrow"><ArrowUpRight size={18} /></span></span>
    </div>
    <span className="sr-only"> (opens in a new tab)</span>
   </a>}
   {rest.length > 0 && <ul className="ms-ins-cards">
    {rest.map((a, i) => <li key={a.url} style={order(i)}>
     <a className="ms-ins-card" href={a.url} target="_blank" rel="noreferrer">
      <span className="ms-ins-card-thumb" aria-hidden="true"><img src={`/images/${a.image}`} alt="" /></span>
      <span className="ms-ins-card-text">
       <span className="ms-ins-card-meta">{kind(a.category)} · <time>{a.date}</time></span>
       <span className="ms-ins-card-title">{a.title}</span>
      </span>
      <ArrowUpRight className="ms-ins-card-go" size={18} aria-hidden="true" />
      <span className="sr-only"> ({a.source}, opens in a new tab)</span>
     </a>
    </li>)}
   </ul>}
  </div>
 </div>;
}


/* ---------- Contact: enquiry form that composes an email ----------
   There is no form backend, so the form is honest about what it does: after validation it
   opens the visitor's email application with a pre-filled message to the firm. */
const firmEmail = "info@mariamsaleemlaw.com";
const vaActivities = ["Advisory", "Broker-Dealer", "Custody", "Exchange", "Lending and Borrowing", "Management and Investment", "Transfer and Settlement", "Issuance", "Derivatives and Leverage", "Mining Services"];
const MESSAGE_MIN = 20, MESSAGE_MAX = 1500;
type Field = "name" | "email" | "company" | "phone" | "location" | "area" | "activity" | "message" | "consent";
const required: Field[] = ["name", "email", "area", "message", "consent"];

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
function messageFor(el: Control): string {
 // The message length is checked on trimmed text so a row of spaces does not pass.
 if (el.name === "message") { const n = el.value.trim().length; el.setCustomValidity(n > 0 && n < MESSAGE_MIN ? "short" : ""); }
 const v = el.validity;
 if (v.valid) return "";
 switch (el.name as Field) {
  case "name": return "Please enter your full name.";
  case "email": return v.valueMissing ? "Please enter your email address." : "Please enter a valid email address, for example name@company.com.";
  case "area": return "Please choose an area of interest.";
  case "message": return v.valueMissing ? "Please tell us briefly how we can help." : `Please write at least ${MESSAGE_MIN} characters (currently ${el.value.trim().length}).`;
  case "consent": return "Please confirm you agree to the privacy notice.";
  default: return "Please check this field.";
 }
}

/** Builds the mailto: URL for an enquiry. Exported so it can be checked in isolation. */
function buildEnquiryMailto(data: Record<string, string>) {
 const area = data.area === "other" ? "Other / Not sure yet" : services.find(s => s.slug === data.area)?.title ?? data.area;
 const lines = [
  `Name: ${data.name}`,
  `Email: ${data.email}`,
  data.company ? `Company: ${data.company}` : null,
  data.phone ? `Phone: ${data.phone}` : null,
  data.location ? `Location: ${data.location}` : null,
  `Area of interest: ${area}`,
  data.activity ? `Virtual asset activity: ${data.activity}` : null,
  "",
  "Message:",
  data.message.split(/\r?\n/).join("\r\n"),
  "",
  "I agree to the use of my details to respond to this enquiry, as described in the privacy notice.",
 ].filter((line): line is string => line !== null);
 const subject = `Enquiry: ${area} – ${data.name}`;
 return `mailto:${firmEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}

export function ContactForm() {
 const formRef = useRef<HTMLFormElement>(null);
 const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
 const [attempted, setAttempted] = useState(false);
 const [area, setArea] = useState("");
 const [length, setLength] = useState(0);
 const [composed, setComposed] = useState(false);

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
  if (first) { setComposed(false); first.focus(); return; }
  const data = Object.fromEntries([...new FormData(form).entries()].map(([k, v]) => [k, String(v).trim()]));
  const url = buildEnquiryMailto(data);
  (window as Window & { __lastMailto?: string }).__lastMailto = url;
  setComposed(true);
  window.location.href = url;
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
   <h3 className="ms-kicker" id="enquiry-title">Enquiry</h3>
   <p>Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>
  </div>
  <div className="ms-contact-grid">
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-name">Full name <span aria-hidden="true">*</span></label>
    <input {...field("name")} autoComplete="name" required maxLength={120} placeholder="Your full name" />
    {error("name")}
   </div>
   <div className="ms-contact-field ms-span-3">
    <label htmlFor="enquiry-email">Email address <span aria-hidden="true">*</span></label>
    <input {...field("email")} type="email" autoComplete="email" required maxLength={254} placeholder="name@company.com" />
    {error("email")}
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-company">Company</label>
    <input {...field("company")} autoComplete="organization" maxLength={180} />
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-phone">Phone</label>
    <input {...field("phone")} type="tel" autoComplete="tel" maxLength={40} placeholder="With country code" />
   </div>
   <div className="ms-contact-field ms-span-2">
    <label htmlFor="enquiry-location">Location</label>
    <input {...field("location")} autoComplete="address-level2" maxLength={120} placeholder="City, country" />
   </div>
   <div className={`ms-contact-field ${area === "virtual-assets" ? "ms-span-3" : "ms-span-6"}`}>
    <label htmlFor="enquiry-area">Area of interest <span aria-hidden="true">*</span></label>
    <select {...field("area")} required value={area} onChange={e => setArea(e.target.value)}>
     <option value="" disabled>Select an area</option>
     {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
     <option value="other">Other / Not sure yet</option>
    </select>
    {error("area")}
   </div>
   {area === "virtual-assets" && <div className="ms-contact-field ms-span-3 ms-contact-extra">
    <label htmlFor="enquiry-activity">Virtual asset activity <span className="ms-contact-optional">(optional)</span></label>
    <select {...field("activity")} defaultValue="">
     <option value="">Select an activity</option>
     {vaActivities.map(a => <option key={a} value={a}>{a}</option>)}
    </select>
   </div>}
   <div className="ms-contact-field ms-span-6">
    <div className="ms-contact-label-row">
     <label htmlFor="enquiry-message">How can we help? <span aria-hidden="true">*</span></label>
     <span className="ms-contact-count" aria-hidden="true">{length} / {MESSAGE_MAX}</span>
    </div>
    <textarea {...field("message")} required minLength={MESSAGE_MIN} maxLength={MESSAGE_MAX} rows={3} placeholder="A brief overview of your business and the question in front of you" />
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
  <div className="ms-contact-actions">
   <button type="submit" className="ms-btn ms-btn-light">Compose email <Mail size={17} aria-hidden="true" /></button>
   <p>Opens your email application with your details filled in.</p>
  </div>
  {composed && <p className="ms-contact-composed" role="status">Your email application should now open with the enquiry ready to send. If it does not, write to <a href={`mailto:${firmEmail}`}>{firmEmail}</a>.</p>}
 </form>;
}
