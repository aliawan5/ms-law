import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Send, X } from "lucide-react";
import { sendEnquiry } from "@/lib/send-enquiry";
import { hero } from "@/lib/home-content";
import "@/app/pages/activity-brief.css";

/** Uses the same email handoff as the contact page; no enquiry is sent automatically. */
export function ActivityBrief({ triggerClassName }: { triggerClassName?: string } = {}) {
 const dialog = useRef<HTMLDialogElement>(null);
 const trigger = useRef<HTMLButtonElement>(null);
 const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
 const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.namedItem("name") as HTMLInputElement;
  name.setCustomValidity(name.value.trim() ? "" : "Please enter your full name.");
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (String(data.get("_honey") || "")) return; // filled only by spam bots
  const fields: Record<string, string> = {
   "Request": "PVARA Activity Brief",
   "Name": name.value.trim(),
   "Email": String(data.get("email") || ""),
   "Company": String(data.get("company") || "").trim() || "(not given)",
   "Proposed activity": String(data.get("activity") || "").trim() || "(not given)",
   "Consent": "Agreed to the use of these details to respond to this request, as described in the privacy notice.",
  };
  setStatus("sending");
  sendEnquiry(`PVARA Activity Brief request – ${fields.Name}`, fields, fields.Email)
   .then(() => { setStatus("sent"); form.reset(); })
   .catch(() => setStatus("error"));
 };
 return <>
  <button ref={trigger} type="button" className={triggerClassName ?? "ms-link-light ms-brief-trigger"} style={triggerClassName ? { border: 0, maxWidth: "100%" } : undefined} aria-haspopup="dialog" aria-describedby="brief-description" onClick={() => { setStatus("idle"); dialog.current?.showModal(); }}>{hero.brief} <ArrowUpRight size={16} aria-hidden="true" /></button>
  <dialog ref={dialog} className="ms-brief-dialog" aria-labelledby="brief-title" aria-describedby="brief-description" onClose={() => trigger.current?.focus()} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.currentTarget.close(); } }}>
   <button type="button" className="ms-brief-close" aria-label="Close activity brief request" onClick={() => dialog.current?.close()}><X size={20} aria-hidden="true" /></button>
   <h2 id="brief-title">Request Your PVARA Activity Brief</h2>
   <p id="brief-description">Share your details and we will send you a brief on how PVARA licensing applies to your activity.</p>
   <form onSubmit={submit} className="ms-brief-form">
    <label>Full name *<input name="name" autoComplete="name" required maxLength={120} onInput={e => e.currentTarget.setCustomValidity("")} /></label>
    <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label>Company<input name="company" autoComplete="organization" maxLength={180} /></label>
    <label>Proposed virtual asset activity<textarea name="activity" rows={3} maxLength={1000} /></label>
    <label className="ms-brief-consent"><input name="consent" type="checkbox" required /><span>I agree to the use of my details to respond to this request, as described in the <a href="/privacy/">privacy notice</a>. *</span></label>
    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="ms-contact-trap" />
    <button type="submit" className="ms-btn ms-btn-dark" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"} <Send size={17} aria-hidden="true" /></button>
    <div role="status" aria-live="polite">
     {status === "sent" && <p>Thank you. Your request has been sent and we will be in touch shortly.</p>}
     {status === "error" && <p>Your request could not be sent. Please try again, or email <a href="mailto:info@mariamsaleemlaw.com">info@mariamsaleemlaw.com</a>.</p>}
    </div>
   </form>
  </dialog>
 </>;
}
