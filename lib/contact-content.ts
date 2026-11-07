/** Copy supplied in MS Law — Contact Page Content v2. Unconfirmed office fields are omitted. */
export const contactMeta = {
 title: "Contact MS Law | Free Legal Consultation, Islamabad",
 description: "Book a free 15–30 minute consultation with MS Law on PVARA licensing, cross-border deals or market entry into Pakistan. Call, email or send an enquiry.",
 url: "https://mariamsaleemlaw.com/contact/",
};

export const contactContent = {
 heading: "Contact MS Law",
 intro: "Speak to a senior lawyer about PVARA licensing, a cross-border transaction, corporate counsel or entering Pakistan. Your first consultation is free.",
 consultation: "Initial consultations take place by telephone or video call and are free of charge. We set aside 15 to 30 minutes to understand your situation before any commitment is made. In-person meetings in Islamabad are reserved for existing clients.",
 formHeading: "Send Us Your Enquiry",
 detailsHeading: "Contact Details",
 email: "info@mariamsaleemlaw.com",
};

export const contactSteps = [
 ["Review your enquiry", "We review your enquiry and reply to arrange a call."],
 ["Discuss your plans", "On the call, we discuss your plans, the regulators involved and a realistic timeline."],
 ["Agree scope and fees", "If you decide to proceed, we send an engagement agreement setting out scope and fees before any work begins."],
] as const;

export const clientTypes = ["Corporate", "Virtual asset business", "Founder or startup", "Bank or financial institution", "Investor", "Other"];
export const enquiryAreas = [
 ["virtual-assets", "PVARA licensing or virtual assets"],
 ["cross-border-transactions", "Cross-border transaction or M&A"],
 ["strategic-counsel", "Strategic corporate counsel"],
 ["payments-market-entry", "Payments or market entry"],
 ["media-speaking", "Media or speaking"],
 ["other", "Other"],
] as const;
export const virtualAssetActivities = ["Advisory", "Broker-Dealer", "Custody", "Exchange", "Lending and Borrowing", "Virtual Asset Derivatives", "Virtual Asset Management and Investment", "Virtual Asset Transfer and Settlement", "Fiat-Referenced Token Issuance", "Asset-Referenced Token Issuance", "Mining Related Services", "Not sure yet"];
// The checkout had no referral field; these include the option specifically supplied in the PDF.
export const referralSources = ["Google or another search engine", "LinkedIn", "Referral", "An article or media appearance", "By asking ChatGPT or another AI tool", "Other"];

export const contactPageSchema = {
 "@context": "https://schema.org", "@type": "ContactPage", url: contactMeta.url,
 mainEntity: {
  "@type": "LegalService", "@id": "https://mariamsaleemlaw.com/#organization", name: "MS Law", email: contactContent.email,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
 },
};
