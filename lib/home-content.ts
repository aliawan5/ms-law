/** Home page SEO copy, from "MS Law — Home Page Content" (team document, keyword data 19 October 2026). */

export const homeMeta = {
 title: "Crypto & PVARA Lawyer in Pakistan | MS Law Islamabad",
 description: "MS Law advises corporates, virtual asset firms, founders and banks on PVARA licensing, M&A, payments and market entry in Pakistan. Free consultation.",
 url: "https://mariamsaleemlaw.com/",
};

export const framework = {
 heading: "Pakistan’s Virtual Assets Framework at a Glance",
 intro: [
  "Pakistan regulates virtual assets rather than banning them. The Virtual Assets Act, 2026 makes the Pakistan Virtual Assets Regulatory Authority (PVARA) the federal regulator, and any business offering virtual asset services in or from Pakistan needs a PVARA licence.",
  "PVARA notified the Pakistan Virtual Asset Services Regulations, 2026 on 21 August 2026. Schedule I lists 11 licensable activities, each with its own minimum paid-up capital:",
 ],
 activities: [
  "Advisory Services",
  "Broker-Dealer Services",
  "Custody Services",
  "Exchange Services",
  "Lending and Borrowing Services",
  "Virtual Asset Derivatives Services",
  "Virtual Asset Management and Investment Services",
  "Virtual Asset Transfer and Settlement Services",
  "Fiat-Referenced Token Issuance Services",
  "Asset-Referenced Token Issuance Services",
  "Mining Related Virtual Asset Services",
 ],
 routesHeading: "Three Routes to Authorisation",
 routes: [
  ["No Objection Certificate (NOC)", "the first-stage approval for firms on the standard path to a full licence."],
  ["Regulatory Sandbox", "supervised testing for new models such as tokenised assets, stablecoin payments and remittances."],
  ["VASP Licence", "the full licence, applied for once a company is incorporated in Pakistan under the Companies Act, 2017."],
 ] as [string, string][],
 foreign: "Foreign firms can apply. The Act and Regulations set no minimum Pakistani shareholding and no cap on foreign ownership.",
 link: ["/services/virtual-assets", "Read our PVARA licensing guide"] as [string, string],
};

export const whyUs: { title: string; body: string }[] = [
 { title: "Regulatory Depth From Day One", body: "Mariam Saleem has tracked Pakistan’s framework from the 2025 Presidential Ordinance to the Virtual Assets Act, 2026, and analyses it in her column for The News. MS Law was built as one of Pakistan’s first practices dedicated to virtual assets regulation." },
 { title: "Two Decades of Transactions", body: "From 2006 to 2025 Mariam advised at Hassan Kaunain Nafees, rising to Partner, before serving as Strategic Legal Counsel at HP | FKM. Her work spans telecom mergers, competition proceedings, international arbitration and PPP and joint venture mandates." },
 { title: "A Cross-Border Lens", body: "We compare Pakistan’s rules with the UAE (VARA) and EU (MiCA) regimes, so foreign applicants see what carries over and what must be rebuilt. We also structure operations across the Pakistan–UAE corridor." },
 { title: "Banking and Regulatory Insight", body: "We advise on aligning virtual asset businesses with SBP’s banking rules, and our team includes counsel with prior corporate advisory experience at the State Bank of Pakistan. Banks get advice from lawyers who understand both sides of the relationship." },
 { title: "Senior Attention on Every Matter", body: "Our founder leads each engagement, supported by Associate Counsel Syeda Muskan Ali Zaidi." },
];

export const processSteps: [string, string][] = [
 ["Initial consultation", "a free 15–30 minute call to understand your business model and timelines."],
 ["Activity mapping", "we match your services to PVARA’s 11 licence categories and the capital each requires."],
 ["Structuring and incorporation", "company set-up with SECP, with a shareholding and governance structure built for PVARA’s fit-and-proper review."],
 ["NOC or sandbox filing", "preparing and submitting your application through PVARA’s portal."],
 ["Compliance build", "Financial Monitoring Unit registration, AML/CFT controls, the Travel Rule, customer asset segregation and your banking relationship."],
 ["Full licence and supervision", "the VASP licence application and ongoing compliance support once you are licensed."],
];

/** Latest insights: [title in content.ts (link and date come from there), heading as written in the document, summary]. */
export const latestInsights: [string, string, string][] = [
 ["A quiet conquest", "A Quiet Conquest", "Why US dollar stablecoins dominate a market now worth more than $320 billion."],
 ["Limits of crypto regulation", "Limits of Crypto Regulation", "What the Virtual Assets Act, 2026 can and cannot achieve for Pakistan’s crypto market."],
 ["Fear, fiat and the future", "Fear, Fiat and the Future", "Pakistan’s legal foundations for digital assets as PVARA opened exchange licence applications."],
];

export const founder = {
 paragraphs: [
  "Mariam Saleem founded MS Law after 20+ years advising on corporate, regulatory and transactional matters across telecom, energy, capital markets and digital assets. She holds a First Class LLB from King’s College London, where she won the Herbert Smith Prize in International Trade Law.",
  "She advises global exchanges, stablecoin infrastructure providers, custody firms and token issuers on entering Pakistan, and speaks on television and at industry events such as Disrupt 92.",
 ],
 alt: "Mariam Saleem, Founder of MS Law, crypto and virtual assets lawyer in Islamabad",
};

/** FAQs, word for word; also emitted as FAQPage schema. */
export const homeFaqs: { q: string; a: string; link?: [string, string] }[] = [
 { q: "Is crypto legal in Pakistan?", a: "Yes, within a regulated framework. Virtual assets are not banned in Pakistan. Under the Virtual Assets Act, 2026, a business offering virtual asset services in or from Pakistan must be authorised by PVARA." },
 { q: "What is PVARA?", a: "PVARA is the Pakistan Virtual Assets Regulatory Authority, the federal regulator for virtual assets and virtual asset service providers (VASPs). It licenses and supervises VASPs and works with the State Bank of Pakistan, SECP and the Financial Monitoring Unit." },
 { q: "Who needs a PVARA licence?", a: "Any business that provides one of PVARA’s 11 licensable activities to users in or from Pakistan, including exchange, custody, broker-dealer, lending, derivatives, asset management, transfer and settlement, token issuance and mining-related services. This applies wherever the business is headquartered." },
 { q: "Can a foreign company get a PVARA licence?", a: "Yes. There is no minimum Pakistani shareholding and no cap on foreign ownership. The licence is held by a company incorporated in Pakistan under the Companies Act, 2017, so foreign groups usually set up a local subsidiary." },
 { q: "How much does a PVARA licence cost?", a: "The largest cost is minimum paid-up capital, which depends on the category: PKR 15 million for advisory services and PKR 200 million for custody, for example. PVARA’s fees and the cost of compliance systems are added to that." },
 { q: "Can banks in Pakistan work with crypto companies?", a: "Yes. Since 14 April 2026, SBP’s BPRD Circular Letter No. 10 of 2026 has allowed SBP-regulated entities to open accounts for PVARA-licensed VASPs, and limited-purpose accounts for NOC holders. Banks must verify each licence with PVARA, apply enhanced due diligence and keep client money accounts separate." },
 { q: "Can a startup get a PVARA licence?", a: "Yes, if it meets the requirements. Minimum capital starts at PKR 15 million for advisory services, and founders with a new product can apply to PVARA’s Regulatory Sandbox to test it under supervision before applying for a full licence." },
 { q: "How do I get started?", a: "Book a free 15–30 minute consultation by phone or video call. If you decide to proceed, we share an engagement agreement before any work begins.", link: ["/contact", "Book a Free Consultation"] },
];

export const homeCta = {
 heading: "Discuss Your Regulatory Roadmap",
 body: "Whether you are a foreign VASP preparing your NOC, a fintech adding crypto rails or an investor assessing an acquisition, start with a free consultation.",
 button: "Book a Free Consultation",
};

/** LegalService schema (JSON-LD) for the home page head. */
export const legalServiceSchema = {
 "@context": "https://schema.org",
 "@type": "LegalService",
 name: "MS Law",
 url: "https://mariamsaleemlaw.com/",
 email: "info@mariamsaleemlaw.com",
 description: "Islamabad law firm advising on PVARA licensing, virtual assets regulation, cross-border M&A and market entry into Pakistan.",
 areaServed: "Pakistan",
 address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
 founder: { "@type": "Person", name: "Mariam Saleem", jobTitle: "Founder", alumniOf: "King's College London", sameAs: "https://www.linkedin.com/in/mariam-saleem-855220285/" },
 knowsAbout: ["PVARA licensing", "Virtual Assets Act 2026", "VASP licensing", "Stablecoins", "RWA tokenization", "Cross-border M&A", "Competition law"],
 sameAs: ["https://www.linkedin.com/company/mslaw/"],
};

export const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
