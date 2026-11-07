import { serviceDocuments, type ServiceCopyBlock, type ServiceCopySection } from "./service-page-content";

export type ServiceFrameworkCopy = ServiceCopySection & { tag: string; id?: string };
const subsections = (section: ServiceCopySection, tag: string): ServiceFrameworkCopy[] => {
 const groups: ServiceFrameworkCopy[] = [];
 for (const block of section.blocks) {
  if (block.tag === "H3") groups.push({ heading: block.text, tag, blocks: [], ...(block.text === "Banks and Financial Institutions" ? { id: "banks" } : {}) });
  else groups.at(-1)?.blocks.push(block);
 }
 return groups;
};
const row = (section: ServiceCopySection, tag: string): ServiceFrameworkCopy => ({ ...section, tag });
const paragraphs = (section: ServiceCopySection) => section.blocks.filter(b => b.tag === "P");
const bullets = (section: ServiceCopySection) => section.blocks.filter(b => b.tag === "LI");

/** Put the supplied copy into the existing overview, cards, strata and checklist slots. */
export function serviceDetailLayout(slug: string) {
 const document = serviceDocuments[slug];
 const sections = document.sections;
 if (slug === "virtual-assets") return {
  document, overview: [sections[0], sections[1], sections[8]], capabilities: sections[4],
  frameworkHeading: sections[7].heading, frameworkIntro: [] as ServiceCopyBlock[],
  frameworks: [row(sections[5], "Stablecoins"), row(sections[6], "Tokenization"), ...subsections(sections[7], "Advice")],
  prepare: { heading: sections[3].heading, label: "Track B: The NOC Route", blocks: sections[3].blocks.filter(b => b.tag === "P" || b.text === "Track A: The Regulatory Sandbox"), items: bullets(sections[3]).map(b => b.text) },
  audience: "Exchanges, custodians, stablecoin issuers and token platforms, and the banks, founders and corporates working alongside them.",
  capital: sections[2],
 };
 if (slug === "cross-border-transactions") return {
  document, overview: [sections[1]], capabilities: sections[0],
  frameworkHeading: sections[2].heading, frameworkIntro: [] as ServiceCopyBlock[],
  frameworks: [row(sections[2], "Joint ventures"), row(sections[3], "Investment")],
  prepare: { heading: sections[4].heading, label: "Experience", blocks: [{ tag: "P", text: document.intro }], items: bullets(sections[4]).map(b => b.text) },
  audience: "Corporates, financial institutions, investors and founders planning acquisitions, joint ventures and investments in Pakistan.",
  capital: undefined,
 };
 if (slug === "strategic-counsel") return {
  document, overview: [sections[1], sections[3]], capabilities: sections[0],
  frameworkHeading: sections[2].heading, frameworkIntro: paragraphs(sections[2]).slice(0, 1),
  frameworks: [
   ...bullets(sections[2]).map((block, i) => ({ tag: "Governance", heading: ["Independent directors", "Female directors", "Listed board appointments", "Audit committee"][i], blocks: [block] })),
   { tag: "Companies", heading: "Private and unlisted companies", blocks: paragraphs(sections[2]).slice(1) },
  ],
  prepare: undefined,
  audience: "Corporates, financial institutions and fast-growing startups in Pakistan, on a retainer or project basis.",
  capital: undefined,
 };
 return {
  document, overview: [sections[2]], capabilities: sections[0],
  frameworkHeading: sections[3].heading, frameworkIntro: [] as ServiceCopyBlock[],
  frameworks: [...subsections(sections[3], "SBP licensing"), row(sections[4], "Banking"), row(sections[5], "Compliance")],
  prepare: { heading: sections[1].heading, label: "Company set-up", blocks: paragraphs(sections[1]), items: bullets(sections[1]).map(b => b.text) },
  audience: "Founders, fintechs, payments companies and foreign corporates entering Pakistan, and the banks that partner with them.",
  capital: undefined,
 };
}

export const serviceFooterTitles: Record<string, [string, string]> = {
 "virtual-assets": ["Plan Your", "PVARA Application"],
 "cross-border-transactions": ["Planning a Deal", "in Pakistan?"],
 "strategic-counsel": ["Senior Legal Counsel", "for Your Business in Pakistan"],
 "payments-market-entry": ["Plan Your Entry", "Into Pakistan"],
};

export function serviceFaqSchema(slug: string) {
 return {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: serviceDocuments[slug].faqs.map(([question, answer]) => ({
   "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })),
 };
}
