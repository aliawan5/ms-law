/** Copy supplied in MS Law — Our Team Page Content v2. */
export const teamMeta = {
 title: "Our Team | Mariam Saleem & MS Law Lawyers, Islamabad",
 description: "Meet Mariam Saleem, Founder of MS Law, and Associate Counsel Syeda Muskan Ali Zaidi: virtual assets, fintech, M&A and corporate lawyers in Islamabad.",
 url: "https://mariamsaleemlaw.com/our-team/",
};

export const teamContent = {
 heading: "Our Team",
 intro: "MS Law is a senior-led team of corporate and regulatory lawyers in Islamabad. Every matter is led by our founder.",
 founderName: "Mariam Saleem",
 founderRole: "Founder, MS Law",
 founderBio: "Mariam Saleem founded MS Law after 20+ years of corporate, regulatory and transactional work across telecom, energy, capital markets and digital assets. She advises global exchanges, stablecoin providers, custody firms, token issuers and fintechs on PVARA licensing and market entry into Pakistan, and her deal work spans cross-border M&A, competition proceedings, international arbitration and joint ventures.",
 columnsLabel: "Read Mariam's columns",
 associateName: "Syeda Muskan Ali Zaidi",
 associateRole: "Associate Counsel, MS Law",
 associateBio: "Syeda Muskan Ali Zaidi works on digital assets, fintech regulation and corporate transactions, with research experience in cross-border compliance. Before joining MS Law, she carried out corporate advisory work at the State Bank of Pakistan and at Legal 500-ranked law firms. She holds an LLB (Hons) from the University of London.",
 ctaButton: "Book a Free Consultation",
};

export const teamPeopleSchema = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Person",
   "@id": `${teamMeta.url}#mariam-saleem`,
   name: teamContent.founderName,
   jobTitle: "Founder",
   worksFor: { "@id": "https://mariamsaleemlaw.com/#organization" },
   alumniOf: { "@type": "CollegeOrUniversity", name: "King's College London" },
   award: "Herbert Smith Prize in International Trade Law, King's College London (2005)",
   knowsAbout: ["PVARA licensing", "Virtual asset regulation", "Stablecoins", "Cross-border M&A", "Competition law"],
   sameAs: ["https://www.linkedin.com/in/mariam-saleem-855220285/"],
  },
  {
   "@type": "Person",
   "@id": `${teamMeta.url}#syeda-muskan-ali-zaidi`,
   name: teamContent.associateName,
   jobTitle: "Associate Counsel",
   worksFor: { "@id": "https://mariamsaleemlaw.com/#organization" },
   alumniOf: { "@type": "CollegeOrUniversity", name: "University of London" },
  },
 ],
};
