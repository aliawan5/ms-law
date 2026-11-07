/** Homepage copy supplied in MS Law — Home Page Content v2, 1 November 2026. */
export const homeMeta = {
 title: "Crypto & PVARA Lawyer in Pakistan | MS Law Islamabad",
 description: "MS Law advises corporates, virtual asset firms, founders and banks on PVARA licensing, M&A, payments and market entry in Pakistan. Free consultation.",
 url: "https://mariamsaleemlaw.com/",
};

export const hero = {
 body: "MS Law is an Islamabad law firm founded by Mariam Saleem. We advise corporates, virtual asset businesses, founders, and banks and financial institutions on PVARA licensing, cross-border transactions and market entry into Pakistan.",
 consultation: "Book a Free Consultation",
 brief: "Request Your PVARA Activity Brief",
};

export const founder = {
 paragraphs: [
  "Mariam Saleem brings 20+ years of M&A, corporate and regulatory experience across telecom, energy, capital markets and digital assets. She advises global exchanges, stablecoin providers, custody firms, fintechs and banks on Pakistan's Virtual Assets Act, 2026, and leads every MS Law engagement herself.",
  "She holds a First Class LLB from King's College London, where she won the Herbert Smith Prize in International Trade Law. She writes on virtual asset regulation for The News and has appeared on Aaj TV, 24 News and at Disrupt 92.",
 ],
 alt: "Mariam Saleem, Founder of MS Law, crypto and virtual assets lawyer in Islamabad",
 link: "Meet Mariam Saleem",
};

export const homePractices = [
 { slug: "virtual-assets", title: "Virtual Assets & Regulation", href: "/virtual-assets-regulation/", body: "PVARA licensing, NOC and sandbox applications, stablecoins, RWA tokenization and AML/CFT compliance." },
 { slug: "cross-border-transactions", title: "Cross-Border Transactions", href: "/cross-border-transactions/", body: "Cross-border M&A, joint ventures, due diligence and Competition Commission of Pakistan merger approval." },
 { slug: "strategic-counsel", title: "Strategic Corporate Counsel", href: "/strategic-corporate-counsel/", body: "General counsel support for corporates and financial institutions: governance, compliance, contracts and regulators." },
 { slug: "payments-market-entry", title: "Payments & Market Entry", href: "/payments-market-entry/", body: "SECP company set-up, SBP payments licences and bank accounts for fintechs and licensed VASPs." },
] as const;

export const cryptoAnswer = {
 paragraphs: [
  "Yes, within a regulated framework. Under the Virtual Assets Act, 2026, the Pakistan Virtual Assets Regulatory Authority (PVARA) licenses and supervises virtual asset service providers, and any business offering virtual asset services in or from Pakistan needs a PVARA licence.",
  "PVARA's regulations, notified on 21 August 2026, set 11 licence categories. Firms reach a full licence through a No Objection Certificate or the Regulatory Sandbox, and foreign ownership is not capped.",
 ],
 link: "How to get a PVARA licence",
 href: "/virtual-assets-regulation/",
};

/** The visible answers and FAQPage schema share the same verbatim copy. */
export const homeFaqs: { q: string; a: string; link?: [string, string] }[] = [
 { q: "Who is Mariam Saleem?", a: "Mariam Saleem is the founder of MS Law, an Islamabad law firm focused on virtual assets regulation and cross-border transactions. She has 20+ years of corporate and regulatory experience and a First Class LLB from King's College London." },
 { q: "What is PVARA?", a: "PVARA is the Pakistan Virtual Assets Regulatory Authority, the federal regulator that licenses and supervises virtual asset service providers under the Virtual Assets Act, 2026." },
 { q: "Can a foreign company get a PVARA licence?", a: "Yes. There is no minimum Pakistani shareholding and no cap on foreign ownership, but the licence is held by a company incorporated in Pakistan, so foreign groups usually set up a local subsidiary." },
 { q: "Can banks in Pakistan work with crypto companies?", a: "Yes. SBP's BPRD Circular Letter No. 10 of 2026 lets banks open accounts for PVARA-licensed VASPs, subject to enhanced due diligence and segregated client money accounts." },
 { q: "How do I get started?", a: "Book a free 15–30 minute consultation by phone or video call. If you proceed, we share an engagement agreement before any work begins." },
];

export const homeCta = {
 body: "Start with a free initial consultation.",
 button: "Book a Free Consultation",
};

export const legalServiceSchema = {
 "@context": "https://schema.org",
 "@type": "LegalService",
 "@id": "https://mariamsaleemlaw.com/#organization",
 name: "MS Law",
 url: homeMeta.url,
 email: "info@mariamsaleemlaw.com",
 address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
 founder: { "@id": "https://mariamsaleemlaw.com/our-team/#mariam-saleem" },
 areaServed: "Pakistan",
 knowsAbout: ["PVARA licensing", "Virtual Assets Act 2026", "Stablecoins", "RWA tokenization", "Cross-border M&A"],
 sameAs: ["https://www.linkedin.com/company/mslaw/"],
};

export const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

