/**
 * Delivers website enquiries straight to the firm's inbox through FormSubmit (formsubmit.co),
 * so visitors do not need an email application. FormSubmit sends one activation email to the
 * address below the first time a form is submitted; once that link is clicked, every
 * enquiry arrives at info@mariamsaleemlaw.com as a formatted email.
 */
export const ENQUIRY_INBOX = "info@mariamsaleemlaw.com";
const ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_INBOX}`;

export async function sendEnquiry(subject: string, fields: Record<string, string>, replyTo?: string) {
 const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify({ ...fields, _subject: subject, _template: "table", _captcha: "false", ...(replyTo ? { _replyto: replyTo } : {}) }),
 });
 const data = await res.json().catch(() => ({})) as { success?: string | boolean; message?: string };
 if (!res.ok || String(data.success) === "false") throw new Error(data.message || `Enquiry could not be sent (${res.status}).`);
}
