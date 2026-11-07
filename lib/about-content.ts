/** Copy supplied in MS Law — About Page Content v2, 1 November 2026. */
export const aboutMeta = {
 title: "About MS Law | Crypto & Corporate Law Firm, Islamabad",
 description: "MS Law is an Islamabad law firm founded by Mariam Saleem, advising on PVARA licensing, cross-border M&A and market entry into Pakistan. Meet the firm.",
 url: "https://mariamsaleemlaw.com/about/",
};

export const aboutContent = {
 heading: "About MS Law",
 intro: "MS Law is a specialist law firm in Islamabad, founded by Mariam Saleem, focused on Pakistan's virtual assets regulation and the corporate and cross-border transactions around it. We advise corporates, virtual asset businesses, founders, and banks and financial institutions.",
 storyHeading: "Our Story",
 story: "In little more than a year, Pakistan moved from having no crypto regulator to a full licensing regime under the Virtual Assets Act, 2026. Mariam Saleem followed that change from the start in her column for The News, and founded MS Law in 2026 to guide clients through it, backed by 20+ years of M&A and corporate work.",
 ctaButton: "Book a Free Consultation",
};

export const aboutPractices = [
 { title: "Virtual Assets & Regulation", body: "PVARA licensing, stablecoins and tokenization", href: "/virtual-assets-regulation/" },
 { title: "Cross-Border Transactions", body: "M&A, joint ventures and CCP merger approval", href: "/cross-border-transactions/" },
 { title: "Strategic Corporate Counsel", body: "general counsel, governance and compliance", href: "/strategic-corporate-counsel/" },
 { title: "Payments & Market Entry", body: "company set-up, SBP licensing and banking access", href: "/payments-market-entry/" },
];

export const aboutPrinciples = [
 { title: "Senior-led", body: "Our founder leads every engagement." },
 { title: "Regulation and transactions together", body: "So nothing falls between a licence and a deal." },
 { title: "A cross-border view", body: "Comparing Pakistan's rules with the UAE (VARA) and EU (MiCA) regimes." },
];

export const aboutFrameworks = [
 "PVARA", "Virtual Assets Act, 2026", "State Bank of Pakistan", "SECP", "Competition Commission of Pakistan", "Financial Monitoring Unit", "FATF", "UAE VARA", "EU MiCA",
];

export const aboutFaqs = [
 { q: "Where is MS Law based?", a: "MS Law is based in Islamabad, Pakistan, and advises clients in Pakistan and abroad.", short: "Islamabad, Pakistan" },
 { q: "Who founded MS Law?", a: "Mariam Saleem, a corporate and regulatory lawyer with 20+ years of experience and a First Class LLB from King's College London.", short: "Mariam Saleem" },
 { q: "What does MS Law specialise in?", a: "PVARA licensing and virtual assets regulation, cross-border M&A and joint ventures, strategic corporate counsel, and payments and market entry into Pakistan.", short: "PVARA licensing" },
];

export const aboutOrganizationSchema = {
 "@context": "https://schema.org",
 "@type": "LegalService",
 "@id": "https://mariamsaleemlaw.com/#organization",
 name: "MS Law",
 url: "https://mariamsaleemlaw.com/",
 // Use the existing brand mark instead of the document's placeholder logo filename.
 logo: "https://mariamsaleemlaw.com/images/logo/ms-mark.png",
 email: "info@mariamsaleemlaw.com",
 address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
 founder: { "@id": "https://mariamsaleemlaw.com/our-team/#mariam-saleem" },
 employee: [
  { "@id": "https://mariamsaleemlaw.com/our-team/#mariam-saleem" },
  { "@id": "https://mariamsaleemlaw.com/our-team/#syeda-muskan-ali-zaidi" },
 ],
 areaServed: "Pakistan",
 knowsAbout: ["PVARA licensing", "Virtual Assets Act 2026", "VASP licensing", "Stablecoins", "RWA tokenization", "Cross-border M&A", "Payments licensing"],
 sameAs: ["https://www.linkedin.com/company/mslaw/"],
};

export const aboutFaqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: aboutFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
