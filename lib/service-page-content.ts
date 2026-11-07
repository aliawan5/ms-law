/** Copy and SEO fields from the four supplied Service Page Content v2 PDFs. */
export type ServiceCopyBlock = { tag: string; text: string };
export type ServiceCopySection = { heading: string; blocks: ServiceCopyBlock[] };
export type ServiceDocument = {
 meta: { url: string; title: string; description: string };
 heading: string; intro: string; heroButton: string;
 sections: ServiceCopySection[];
 faqs: [string, string][]; faqHeading: string;
 cta: { heading: string; body: string | null; button: string };
 schema: object;
};

export const serviceDocuments: Record<string, ServiceDocument> = {
 "virtual-assets": {
  "meta": {
   "url": "https://mariamsaleemlaw.com/virtual-assets-regulation/",
   "title": "PVARA Licence Lawyers | VASP Licensing in Pakistan | MS Law",
   "description": "NOC, sandbox and full VASP licence support under Pakistan's Virtual Assets Act, 2026, plus stablecoin and RWA tokenization advice. Talk to MS Law today."
  },
  "heading": "PVARA Licensing and Virtual Assets Regulation in Pakistan",
  "intro": "MS Law helps exchanges, custodians, stablecoin issuers and token platforms obtain PVARA authorisation under Pakistan's Virtual Assets Act, 2026, and advises the banks, founders and corporates working alongside them. Our work covers the NOC, the Regulatory Sandbox and the full VASP licence.",
  "heroButton": "Book a Free Consultation",
  "sections": [
   {
    "heading": "What Is PVARA?",
    "blocks": [
     {
      "tag": "P",
      "text": "The Pakistan Virtual Assets Regulatory Authority (PVARA) is Pakistan's federal regulator for virtual assets and virtual asset service providers (VASPs). Set up by ordinance in July 2025 and made permanent by the Virtual Assets Act, 2026, it licenses firms under regulations notified on 21 August 2026."
     }
    ]
   },
   {
    "heading": "Who Needs a PVARA Licence?",
    "blocks": [
     {
      "tag": "P",
      "text": "No one may provide virtual asset services in or from Pakistan without a PVARA licence. That covers exchanges, brokers, custodians, lenders, derivatives platforms, asset managers, payment and settlement providers, token issuers and some mining businesses. Mining on your own account is not licensable; it becomes so when it involves customer assets or services to third parties."
     }
    ]
   },
   {
    "heading": "PVARA Licence Categories and Minimum Capital",
    "blocks": [
     {
      "tag": "P",
      "text": "Schedule I sets 11 licence categories. You can apply for one or more."
     },
     {
      "tag": "P",
      "text": "Paid-up capital stays in your Pakistani company; it is not a fee. PVARA also charges a non-refundable processing fee."
     }
    ]
   },
   {
    "heading": "How to Get a PVARA Licence",
    "blocks": [
     {
      "tag": "H3",
      "text": "Track B: The NOC Route"
     },
     {
      "tag": "LI",
      "text": "1. Apply for an NOC with a business plan and corporate documents. PVARA aims to decide within 60 days."
     },
     {
      "tag": "LI",
      "text": "2. Register with the Financial Monitoring Unit (FMU)."
     },
     {
      "tag": "LI",
      "text": "3. Incorporate in Pakistan under the Companies Act, 2017, with at least three directors, one-third of them independent."
     },
     {
      "tag": "LI",
      "text": "4. Apply for the VASP licence while the NOC is valid: three months, extendable once by up to three months."
     },
     {
      "tag": "LI",
      "text": "5. PVARA decides within 90 days, extendable by up to 60 days."
     },
     {
      "tag": "H3",
      "text": "Track A: The Regulatory Sandbox"
     },
     {
      "tag": "P",
      "text": "The sandbox lets firms test an innovative product under PVARA supervision within agreed limits. A successful exit leads straight to a licence application without a separate NOC."
     }
    ]
   },
   {
    "heading": "Our Virtual Assets Services",
    "blocks": [
     {
      "tag": "LI",
      "text": "PVARA licensing strategy, NOC applications and regulator engagement"
     },
     {
      "tag": "LI",
      "text": "Regulatory sandbox applications for new models"
     },
     {
      "tag": "LI",
      "text": "VASP structuring, SECP incorporation and director approvals"
     },
     {
      "tag": "LI",
      "text": "AML/CFT and Travel Rule compliance under FATF Recommendation 16"
     },
     {
      "tag": "LI",
      "text": "Stablecoin and token issuance licences"
     },
     {
      "tag": "LI",
      "text": "Pakistan–UAE corridor structuring and comparative VARA and MiCA advice"
     }
    ]
   },
   {
    "heading": "Stablecoin Regulation in Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "Issuing a stablecoin needs one of two PVARA licences: fiat-referenced token (FRT) issuance for tokens tied to one currency, or asset-referenced token (ART) issuance for tokens tied to assets such as gold or real estate. Each needs PKR 300 million in paid-up capital."
     },
     {
      "tag": "P",
      "text": "Issuers must back tokens with reserves of at least 100%, keep those reserves separate, publish a whitepaper before any offer and get PVARA approval for each issuance."
     }
    ]
   },
   {
    "heading": "RWA and Real Estate Tokenization in Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "Tokenising real-world assets such as property, commodities or receivables usually falls under the ART licence or the Regulatory Sandbox. Where tokens carry share-like rights, SECP approval may also be needed, so we structure both filings together."
     }
    ]
   },
   {
    "heading": "Advice for Banks, Founders and Corporates",
    "blocks": [
     {
      "tag": "H3",
      "text": "Banks and Financial Institutions"
     },
     {
      "tag": "P",
      "text": "Since 14 April 2026, SBP's BPRD Circular Letter No. 10 of 2026 lets SBP-regulated entities open accounts for PVARA-licensed VASPs, and limited-purpose accounts for NOC holders. Banks must verify each licence with PVARA, apply enhanced due diligence and keep client money accounts rupee-only, non-remunerative, cash-free and segregated. They may not invest in, trade or hold virtual assets with their own funds or customer deposits."
     },
     {
      "tag": "H3",
      "text": "Founders and Startups"
     },
     {
      "tag": "P",
      "text": "Pick the narrowest licence category that fits your model, since capital ranges from PKR 15 million for advisory to PKR 500 million for exchanges. If your product is new, the Regulatory Sandbox is built for testing it before a full licence."
     },
     {
      "tag": "H3",
      "text": "Corporates Using Blockchain"
     },
     {
      "tag": "P",
      "text": "Before tokenising assets or paying in stablecoins, check whether the activity is a virtual asset service that needs a licence, or whether a PVARA-licensed partner can carry it."
     }
    ]
   },
   {
    "heading": "Foreign VASPs Entering Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "The Act and Regulations set no minimum Pakistani shareholding and no cap on foreign ownership. Foreign groups usually incorporate a local subsidiary, and firms already licensed in the UAE, EU, UK, US or Singapore can adapt much of their compliance framework."
     },
     {
      "tag": "LINK",
      "text": "Setting up your Pakistani company → /payments-market-entry/"
     }
    ]
   },
   {
    "heading": "PVARA Licensing: FAQs",
    "blocks": [
     {
      "tag": "H3",
      "text": "How long does it take to get a PVARA licence?"
     },
     {
      "tag": "P",
      "text": "PVARA aims to decide an NOC within 60 days of a complete application and a licence within 90 days, extendable by up to 60 days. Overall timing depends mostly on how quickly your company, capital and compliance are ready."
     },
     {
      "tag": "H3",
      "text": "How much does a PVARA licence cost?"
     },
     {
      "tag": "P",
      "text": "The main cost is minimum paid-up capital, from PKR 15 million for advisory services to PKR 500 million for exchanges, plus PVARA's non-refundable processing fee and the cost of compliance systems."
     },
     {
      "tag": "H3",
      "text": "What is the difference between a PVARA NOC and a licence?"
     },
     {
      "tag": "P",
      "text": "An NOC is a first-stage approval to prepare for licensing; it does not allow you to operate. The VASP licence is the authorisation to provide services and needs a valid NOC or a sandbox completion letter."
     },
     {
      "tag": "H3",
      "text": "Is crypto mining legal in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Mining on your own account is not a licensable service. A licence is needed when mining involves customer assets or funds, or when mining services are offered to others professionally."
     },
     {
      "tag": "H3",
      "text": "Are stablecoins legal in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Issuing a stablecoin is a licensed activity. Issuers need a fiat-referenced or asset-referenced token licence, full reserve backing and PVARA approval for each issuance."
     },
     {
      "tag": "H3",
      "text": "Can a startup get a PVARA licence?"
     },
     {
      "tag": "P",
      "text": "Yes, if it meets the requirements, including minimum capital from PKR 15 million and at least three directors. Founders with an untested product can apply to the Regulatory Sandbox first."
     }
    ]
   }
  ],
  "faqs": [
   [
    "How long does it take to get a PVARA licence?",
    "PVARA aims to decide an NOC within 60 days of a complete application and a licence within 90 days, extendable by up to 60 days. Overall timing depends mostly on how quickly your company, capital and compliance are ready."
   ],
   [
    "How much does a PVARA licence cost?",
    "The main cost is minimum paid-up capital, from PKR 15 million for advisory services to PKR 500 million for exchanges, plus PVARA's non-refundable processing fee and the cost of compliance systems."
   ],
   [
    "What is the difference between a PVARA NOC and a licence?",
    "An NOC is a first-stage approval to prepare for licensing; it does not allow you to operate. The VASP licence is the authorisation to provide services and needs a valid NOC or a sandbox completion letter."
   ],
   [
    "Is crypto mining legal in Pakistan?",
    "Mining on your own account is not a licensable service. A licence is needed when mining involves customer assets or funds, or when mining services are offered to others professionally."
   ],
   [
    "Are stablecoins legal in Pakistan?",
    "Issuing a stablecoin is a licensed activity. Issuers need a fiat-referenced or asset-referenced token licence, full reserve backing and PVARA approval for each issuance."
   ],
   [
    "Can a startup get a PVARA licence?",
    "Yes, if it meets the requirements, including minimum capital from PKR 15 million and at least three directors. Founders with an untested product can apply to the Regulatory Sandbox first."
   ]
  ],
  "faqHeading": "PVARA Licensing: FAQs",
  "cta": {
   "heading": "Plan Your PVARA Application",
   "body": "Tell us what you plan to offer in Pakistan, and we will map the licence categories, capital and timeline in a free consultation.",
   "button": "Book a Free Consultation"
  },
  "schema": {
   "@context": "https://schema.org",
   "@graph": [
    {
     "@type": "Service",
     "name": "PVARA Licensing and Virtual Assets Regulatory Advice",
     "provider": {
      "@id": "https://mariamsaleemlaw.com/#organization"
     },
     "areaServed": "Pakistan",
     "url": "https://mariamsaleemlaw.com/virtual-assets-regulation/"
    },
    {
     "@type": "BreadcrumbList",
     "itemListElement": [
      {
       "@type": "ListItem",
       "position": 1,
       "name": "Home",
       "item": "https://mariamsaleemlaw.com/"
      },
      {
       "@type": "ListItem",
       "position": 2,
       "name": "Virtual Assets & Regulation",
       "item": "https://mariamsaleemlaw.com/virtual-assets-regulation/"
      }
     ]
    }
   ]
  }
 },
 "cross-border-transactions": {
  "meta": {
   "url": "https://mariamsaleemlaw.com/cross-border-transactions/",
   "title": "M&A Lawyer in Pakistan | Cross-Border Deals | MS Law",
   "description": "Cross-border M&A, joint ventures, legal due diligence and CCP merger approval for investors entering Pakistan. 20+ years of deal experience at MS Law."
  },
  "heading": "Cross-Border M&A and Transaction Lawyers in Pakistan",
  "intro": "MS Law advises corporates, financial institutions, investors and founders on acquisitions, joint ventures and investments in Pakistan, drawing on 20+ years of transactions in telecom, energy, real estate, financial services and technology.",
  "heroButton": "Discuss Your Transaction",
  "sections": [
   {
    "heading": "Our Cross-Border Transaction Services",
    "blocks": [
     {
      "tag": "LI",
      "text": "Cross-border M&A and investment structuring"
     },
     {
      "tag": "LI",
      "text": "Legal and regulatory due diligence, delivered as a red-flag report"
     },
     {
      "tag": "LI",
      "text": "Competition Commission of Pakistan (CCP) merger filings"
     },
     {
      "tag": "LI",
      "text": "Joint ventures and shareholders' agreements"
     },
     {
      "tag": "LI",
      "text": "Investment rounds for founders raising from international investors"
     },
     {
      "tag": "LI",
      "text": "Acquisitions of fintechs and VASPs, including PVARA approval of new directors and controllers"
     }
    ]
   },
   {
    "heading": "Merger Control: When You Need CCP Approval",
    "blocks": [
     {
      "tag": "P",
      "text": "Under Section 11 of the Competition Act, 2010, a merger that meets the notification thresholds needs CCP clearance before completion, including deals between foreign parties with business or effects in Pakistan. A filing is required when both tests below are met."
     },
     {
      "tag": "LI",
      "text": "Size test: gross assets of at least PKR 300 million or combined assets of at least PKR 1 billion, or annual turnover of at least PKR 500 million or combined turnover of at least PKR 1 billion."
     },
     {
      "tag": "LI",
      "text": "Deal test: a transaction or asset value of at least PKR 100 million, or the acquirer ending up with more than 10% of the voting shares."
     },
     {
      "tag": "P",
      "text": "Phase I review takes up to 30 working days and Phase II up to 90 working days, counted from a complete filing."
     }
    ]
   },
   {
    "heading": "Joint Ventures in Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "Pakistan has no stand-alone joint venture law. Most JVs are a new company registered with SECP under the Companies Act, 2017 and governed by a shareholders' agreement; others are contractual consortiums, partnerships or LLPs. A JV may itself need CCP clearance."
     },
     {
      "tag": "P",
      "text": "A strong joint venture agreement covers capital contributions, board control and reserved matters, deadlock, transfer and exit rights, and dispute resolution, including international arbitration."
     }
    ]
   },
   {
    "heading": "Foreign Direct Investment in Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "All sectors are open to foreign investment unless restricted, foreign investors can generally own 100% of a Pakistani company, and there is no minimum foreign equity. Caps apply in sectors such as airlines, banking, agriculture and media. Profits and disinvestment proceeds can be repatriated through authorised banks under the Foreign Private Investment (Promotion and Protection) Act, 1976."
     }
    ]
   },
   {
    "heading": "Representative Experience",
    "blocks": [
     {
      "tag": "LI",
      "text": "Led legal strategy on major telecom mergers and related competition proceedings in Pakistan"
     },
     {
      "tag": "LI",
      "text": "Advised on M&A and shareholder arrangements in regulated sectors, including telecommunications and pharmaceuticals"
     },
     {
      "tag": "LI",
      "text": "Advised on real estate and infrastructure joint ventures and PPP mandates"
     },
     {
      "tag": "LI",
      "text": "Advised international companies on market entry into Pakistan"
     }
    ]
   },
   {
    "heading": "Cross-Border Transactions: FAQs",
    "blocks": [
     {
      "tag": "H3",
      "text": "Do I need CCP approval for a merger in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Yes, if the deal meets both the size test on assets or turnover and the deal test of PKR 100 million in value or more than 10% of voting shares. The merger cannot complete until the CCP clears it."
     },
     {
      "tag": "H3",
      "text": "How long does CCP merger approval take?"
     },
     {
      "tag": "P",
      "text": "Phase I takes up to 30 working days and Phase II up to 90 working days, both counted from a complete filing."
     },
     {
      "tag": "H3",
      "text": "How do I register a joint venture in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Most JVs are registered as a new company with SECP under the Companies Act, 2017, with a shareholders' agreement between the partners. Contractual JVs need no registration."
     },
     {
      "tag": "H3",
      "text": "Can a foreign company own 100% of a Pakistani company?"
     },
     {
      "tag": "P",
      "text": "In most sectors, yes. Caps apply in sectors such as airlines, banking, agriculture and media, and a few sectors such as arms and explosives are restricted."
     },
     {
      "tag": "H3",
      "text": "What does legal due diligence in Pakistan cover?"
     },
     {
      "tag": "P",
      "text": "Corporate records and SECP filings, licences, material contracts, employment, litigation, property and tax exposure, with the issues that affect price or closing reported first."
     }
    ]
   }
  ],
  "faqs": [
   [
    "Do I need CCP approval for a merger in Pakistan?",
    "Yes, if the deal meets both the size test on assets or turnover and the deal test of PKR 100 million in value or more than 10% of voting shares. The merger cannot complete until the CCP clears it."
   ],
   [
    "How long does CCP merger approval take?",
    "Phase I takes up to 30 working days and Phase II up to 90 working days, both counted from a complete filing."
   ],
   [
    "How do I register a joint venture in Pakistan?",
    "Most JVs are registered as a new company with SECP under the Companies Act, 2017, with a shareholders' agreement between the partners. Contractual JVs need no registration."
   ],
   [
    "Can a foreign company own 100% of a Pakistani company?",
    "In most sectors, yes. Caps apply in sectors such as airlines, banking, agriculture and media, and a few sectors such as arms and explosives are restricted."
   ],
   [
    "What does legal due diligence in Pakistan cover?",
    "Corporate records and SECP filings, licences, material contracts, employment, litigation, property and tax exposure, with the issues that affect price or closing reported first."
   ]
  ],
  "faqHeading": "Cross-Border Transactions: FAQs",
  "cta": {
   "heading": "Planning a Deal in Pakistan?",
   "body": null,
   "button": "Book a Free Consultation"
  },
  "schema": {
   "@context": "https://schema.org",
   "@graph": [
    {
     "@type": "Service",
     "name": "Cross-Border M&A and Transaction Advisory in Pakistan",
     "provider": {
      "@id": "https://mariamsaleemlaw.com/#organization"
     },
     "areaServed": "Pakistan",
     "url": "https://mariamsaleemlaw.com/cross-border-transactions/"
    },
    {
     "@type": "BreadcrumbList",
     "itemListElement": [
      {
       "@type": "ListItem",
       "position": 1,
       "name": "Home",
       "item": "https://mariamsaleemlaw.com/"
      },
      {
       "@type": "ListItem",
       "position": 2,
       "name": "Cross-Border Transactions",
       "item": "https://mariamsaleemlaw.com/cross-border-transactions/"
      }
     ]
    }
   ]
  }
 },
 "strategic-counsel": {
  "meta": {
   "url": "https://mariamsaleemlaw.com/strategic-corporate-counsel/",
   "title": "Corporate Lawyer in Islamabad | General Counsel | MS Law",
   "description": "Outsourced general counsel for companies in Pakistan: corporate governance, regulatory compliance, contracts and employment. Corporate law firm, Islamabad."
  },
  "heading": "Corporate Lawyers in Islamabad for Strategic General Counsel",
  "intro": "MS Law gives corporates, financial institutions and fast-growing startups in Pakistan senior legal counsel without the cost of a full in-house team, on a retainer or project basis.",
  "heroButton": "Discuss a Retainer",
  "sections": [
   {
    "heading": "What Strategic Corporate Counsel Covers",
    "blocks": [
     {
      "tag": "LI",
      "text": "Corporate governance and board advisory under the Companies Act, 2017"
     },
     {
      "tag": "LI",
      "text": "Regulatory compliance across SECP, SBP, the Competition Commission and sector regulators"
     },
     {
      "tag": "LI",
      "text": "Commercial contracts and negotiation"
     },
     {
      "tag": "LI",
      "text": "Employment contracts and HR policy"
     },
     {
      "tag": "LI",
      "text": "Government relations and regulatory liaison"
     },
     {
      "tag": "LI",
      "text": "Banking and financial services regulation for banks, EMIs, brokers and asset managers"
     },
     {
      "tag": "LI",
      "text": "Founder and startup counsel: company formation, shareholders' agreements and investment rounds"
     },
     {
      "tag": "LI",
      "text": "Competition law compliance, and infrastructure and PPP advisory"
     }
    ]
   },
   {
    "heading": "How Our General Counsel Retainers Work",
    "blocks": [
     {
      "tag": "P",
      "text": "A retainer gives you a named senior lawyer who knows your business: a monthly scope of advice, a defined project such as a compliance review, or on-call support for an in-house team. Scope and fees are agreed in writing before any work begins."
     }
    ]
   },
   {
    "heading": "Corporate Governance in Pakistan: What Listed Companies Must Do",
    "blocks": [
     {
      "tag": "P",
      "text": "Listed companies follow SECP's Listed Companies (Code of Corporate Governance) Regulations, 2019. Its mandatory rules include:"
     },
     {
      "tag": "LI",
      "text": "At least two independent directors or one-third of the board, whichever is higher"
     },
     {
      "tag": "LI",
      "text": "At least one female director"
     },
     {
      "tag": "LI",
      "text": "No director on more than seven listed boards at once"
     },
     {
      "tag": "LI",
      "text": "An audit committee chaired by an independent director"
     },
     {
      "tag": "P",
      "text": "Private and unlisted companies are governed mainly by the Companies Act, 2017."
     }
    ]
   },
   {
    "heading": "Why Companies Choose MS Law",
    "blocks": [
     {
      "tag": "P",
      "text": "Mariam Saleem has spent 20+ years advising telecom, fintech and multinational companies on corporate structuring, compliance and competition law, and she leads every matter. From Islamabad, we work close to the federal regulators and ministries."
     },
     {
      "tag": "LINK",
      "text": "Meet our team → /our-team/"
     }
    ]
   },
   {
    "heading": "Corporate Counsel: FAQs",
    "blocks": [
     {
      "tag": "H3",
      "text": "What does a corporate lawyer in Islamabad do?"
     },
     {
      "tag": "P",
      "text": "A corporate lawyer advises companies on how they are formed, governed and run: board matters, contracts, compliance, transactions and dealings with regulators such as SECP. Islamabad is home to the federal regulators, which makes it a practical base for this work."
     },
     {
      "tag": "H3",
      "text": "What is an outsourced general counsel?"
     },
     {
      "tag": "P",
      "text": "An external senior lawyer who acts as a company's head of legal on a retainer, giving continuous, business-aware advice without a full in-house team."
     },
     {
      "tag": "H3",
      "text": "Which code of corporate governance applies in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Listed companies follow the Listed Companies (Code of Corporate Governance) Regulations, 2019, issued by SECP. Private and unlisted companies are governed mainly by the Companies Act, 2017."
     },
     {
      "tag": "H3",
      "text": "Do you advise startups and founders?"
     },
     {
      "tag": "P",
      "text": "Yes. We help founders incorporate, agree shareholders' agreements, prepare for investment rounds and put in place the governance investors expect."
     }
    ]
   }
  ],
  "faqs": [
   [
    "What does a corporate lawyer in Islamabad do?",
    "A corporate lawyer advises companies on how they are formed, governed and run: board matters, contracts, compliance, transactions and dealings with regulators such as SECP. Islamabad is home to the federal regulators, which makes it a practical base for this work."
   ],
   [
    "What is an outsourced general counsel?",
    "An external senior lawyer who acts as a company's head of legal on a retainer, giving continuous, business-aware advice without a full in-house team."
   ],
   [
    "Which code of corporate governance applies in Pakistan?",
    "Listed companies follow the Listed Companies (Code of Corporate Governance) Regulations, 2019, issued by SECP. Private and unlisted companies are governed mainly by the Companies Act, 2017."
   ],
   [
    "Do you advise startups and founders?",
    "Yes. We help founders incorporate, agree shareholders' agreements, prepare for investment rounds and put in place the governance investors expect."
   ]
  ],
  "faqHeading": "Corporate Counsel: FAQs",
  "cta": {
   "heading": "Senior Legal Counsel for Your Business in Pakistan",
   "body": null,
   "button": "Book a Free Consultation"
  },
  "schema": {
   "@context": "https://schema.org",
   "@graph": [
    {
     "@type": "Service",
     "name": "Strategic Corporate Counsel and General Counsel Retainers",
     "provider": {
      "@id": "https://mariamsaleemlaw.com/#organization"
     },
     "areaServed": [
      "Islamabad",
      "Pakistan"
     ],
     "url": "https://mariamsaleemlaw.com/strategic-corporate-counsel/"
    },
    {
     "@type": "BreadcrumbList",
     "itemListElement": [
      {
       "@type": "ListItem",
       "position": 1,
       "name": "Home",
       "item": "https://mariamsaleemlaw.com/"
      },
      {
       "@type": "ListItem",
       "position": 2,
       "name": "Strategic Corporate Counsel",
       "item": "https://mariamsaleemlaw.com/strategic-corporate-counsel/"
      }
     ]
    }
   ]
  }
 },
 "payments-market-entry": {
  "meta": {
   "url": "https://mariamsaleemlaw.com/payments-market-entry/",
   "title": "PSP & EMI Licence Pakistan | Fintech Market Entry | MS Law",
   "description": "Enter Pakistan with confidence: SECP company set-up, SBP EMI and PSP licences, banking access and AML/CFT compliance for founders, fintechs and banks."
  },
  "heading": "Payments and Market Entry Lawyers in Pakistan",
  "intro": "MS Law helps founders, fintechs, payments companies and foreign corporates enter Pakistan, and advises the banks that partner with them. We set up your Pakistani company, secure SBP licences such as EMI and PSP authorisations, and open banking channels.",
  "heroButton": "Plan Your Market Entry",
  "sections": [
   {
    "heading": "Our Payments and Market Entry Services",
    "blocks": [
     {
      "tag": "LI",
      "text": "SECP company set-up and security clearance for foreign directors"
     },
     {
      "tag": "LI",
      "text": "SBP EMI and PSO/PSP licensing"
     },
     {
      "tag": "LI",
      "text": "Bank and fintech partnership agreements"
     },
     {
      "tag": "LI",
      "text": "Banking access and client money accounts"
     },
     {
      "tag": "LI",
      "text": "AML/CFT compliance programmes"
     },
     {
      "tag": "LI",
      "text": "Foreign exchange structuring and profit repatriation"
     }
    ]
   },
   {
    "heading": "How to Register a Company in Pakistan as a Foreign Investor",
    "blocks": [
     {
      "tag": "P",
      "text": "Most foreign investors use a private limited company registered with SECP under the Companies Act, 2017, which can be wholly foreign-owned in most sectors."
     },
     {
      "tag": "LI",
      "text": "1. Reserve the company name with SECP."
     },
     {
      "tag": "LI",
      "text": "2. File the incorporation documents with director and shareholder details."
     },
     {
      "tag": "LI",
      "text": "3. File security clearance documents for foreign directors and shareholders. SECP can incorporate before the Ministry of Interior clears them."
     },
     {
      "tag": "LI",
      "text": "4. Register with the FBR, open a bank account and bring capital in through the banking system."
     }
    ]
   },
   {
    "heading": "Launching a Fintech in Pakistan: A Founder's Checklist",
    "blocks": [
     {
      "tag": "P",
      "text": "Most early mistakes made by fintech startups in Pakistan come from building the product before choosing the licence route."
     },
     {
      "tag": "LI",
      "text": "Decide whether you need your own licence or can launch through a licensed bank, EMI or VASP partner."
     },
     {
      "tag": "LI",
      "text": "Sign a founders' shareholders' agreement before outside investors come in."
     },
     {
      "tag": "LI",
      "text": "Budget for regulatory capital: PKR 200 million for an EMI, and PKR 15 million to PKR 500 million for PVARA categories."
     },
     {
      "tag": "LI",
      "text": "Plan your AML/CFT programme and bank relationship early."
     }
    ]
   },
   {
    "heading": "SBP Licences for Payments and E-Money",
    "blocks": [
     {
      "tag": "H3",
      "text": "EMI Licence"
     },
     {
      "tag": "P",
      "text": "An Electronic Money Institution (EMI) is a non-bank company authorised by SBP to issue e-money, such as digital wallets, under SBP's Regulations for Electronic Money Institutions (revised June 2023)."
     },
     {
      "tag": "LI",
      "text": "Initial capital of PKR 200 million, plus a security deposit with SBP"
     },
     {
      "tag": "LI",
      "text": "In-principle approval (decided within 60 days), then pilot, then commercial operations"
     },
     {
      "tag": "LI",
      "text": "Customer funds held in a trust account, with no lending and no interest"
     },
     {
      "tag": "H3",
      "text": "PSO/PSP Licence"
     },
     {
      "tag": "P",
      "text": "Payment gateways, switches and other payment service providers are licensed under SBP's Rules for Payment System Operators and Payment Service Providers. We advise whether an EMI, a PSO/PSP licence or a bank partnership best fits your model."
     }
    ]
   },
   {
    "heading": "Banking Access for Crypto and Fintech Firms",
    "blocks": [
     {
      "tag": "P",
      "text": "SBP's BPRD Circular Letter No. 10 of 2026, issued on 14 April 2026, replaced the 2018 circular that stopped banks dealing in virtual currencies. Banks may now open accounts for PVARA-licensed VASPs and limited-purpose accounts for NOC holders, with rupee-only, segregated client money accounts."
     },
     {
      "tag": "P",
      "text": "For banks and EMIs, that means licence verification with PVARA, enhanced due diligence and updated risk profiling. We help firms prepare for onboarding and help institutions write the policies."
     }
    ]
   },
   {
    "heading": "AML/CFT Regulations in Pakistan",
    "blocks": [
     {
      "tag": "P",
      "text": "Pakistan's framework rests on the Anti-Money Laundering Act, 2010, with suspicious transactions reported to the Financial Monitoring Unit (FMU). Banks and payment firms follow SBP's AML/CFT/CPF Regulations, and VASPs follow PVARA's rules. A compliant programme covers customer due diligence, transaction monitoring, suspicious transaction reporting, record keeping and, for virtual asset transfers, the Travel Rule."
     }
    ]
   },
   {
    "heading": "Payments and Market Entry: FAQs",
    "blocks": [
     {
      "tag": "H3",
      "text": "How do I register a company in Pakistan as a foreigner?"
     },
     {
      "tag": "P",
      "text": "Register a private limited company with SECP under the Companies Act, 2017, and file security clearance documents for foreign directors and shareholders. SECP can incorporate first, with Ministry of Interior clearance following."
     },
     {
      "tag": "H3",
      "text": "What is an EMI licence in Pakistan?"
     },
     {
      "tag": "P",
      "text": "An EMI licence lets a non-bank company issue e-money, such as mobile wallets. Applicants need PKR 200 million in initial capital and pass through in-principle approval, pilot and commercial stages."
     },
     {
      "tag": "H3",
      "text": "Do I need an EMI or a PSP licence?"
     },
     {
      "tag": "P",
      "text": "You need an EMI licence if you hold customer money as e-money, such as a wallet balance. A PSO/PSP licence fits businesses that operate payment systems or process payments without issuing e-money."
     },
     {
      "tag": "H3",
      "text": "Can a fintech launch through a bank partner instead of its own licence?"
     },
     {
      "tag": "P",
      "text": "Often, yes. Many payment models run through a licensed bank or EMI, with the fintech providing the technology. The partnership agreement must set out which side carries each regulatory and AML/CFT responsibility."
     },
     {
      "tag": "H3",
      "text": "Has the State Bank of Pakistan banned cryptocurrency?"
     },
     {
      "tag": "P",
      "text": "Not any more. BPRD Circular Letter No. 10 of 2026 replaced the 2018 circular on 14 April 2026, and banks may now serve PVARA-licensed VASPs. Banks still cannot invest in, trade or hold virtual assets with their own funds or customer deposits."
     },
     {
      "tag": "H3",
      "text": "Which banks are crypto-friendly in Pakistan?"
     },
     {
      "tag": "P",
      "text": "Any SBP-regulated bank may now open accounts for PVARA-licensed VASPs, subject to its own due diligence and risk appetite. There is no official list, so choosing a bank is part of launch planning."
     }
    ]
   }
  ],
  "faqs": [
   [
    "How do I register a company in Pakistan as a foreigner?",
    "Register a private limited company with SECP under the Companies Act, 2017, and file security clearance documents for foreign directors and shareholders. SECP can incorporate first, with Ministry of Interior clearance following."
   ],
   [
    "What is an EMI licence in Pakistan?",
    "An EMI licence lets a non-bank company issue e-money, such as mobile wallets. Applicants need PKR 200 million in initial capital and pass through in-principle approval, pilot and commercial stages."
   ],
   [
    "Do I need an EMI or a PSP licence?",
    "You need an EMI licence if you hold customer money as e-money, such as a wallet balance. A PSO/PSP licence fits businesses that operate payment systems or process payments without issuing e-money."
   ],
   [
    "Can a fintech launch through a bank partner instead of its own licence?",
    "Often, yes. Many payment models run through a licensed bank or EMI, with the fintech providing the technology. The partnership agreement must set out which side carries each regulatory and AML/CFT responsibility."
   ],
   [
    "Has the State Bank of Pakistan banned cryptocurrency?",
    "Not any more. BPRD Circular Letter No. 10 of 2026 replaced the 2018 circular on 14 April 2026, and banks may now serve PVARA-licensed VASPs. Banks still cannot invest in, trade or hold virtual assets with their own funds or customer deposits."
   ],
   [
    "Which banks are crypto-friendly in Pakistan?",
    "Any SBP-regulated bank may now open accounts for PVARA-licensed VASPs, subject to its own due diligence and risk appetite. There is no official list, so choosing a bank is part of launch planning."
   ]
  ],
  "faqHeading": "Payments and Market Entry: FAQs",
  "cta": {
   "heading": "Plan Your Entry Into Pakistan",
   "body": null,
   "button": "Book a Free Consultation"
  },
  "schema": {
   "@context": "https://schema.org",
   "@graph": [
    {
     "@type": "Service",
     "name": "Payments Licensing and Market Entry in Pakistan",
     "provider": {
      "@id": "https://mariamsaleemlaw.com/#organization"
     },
     "areaServed": "Pakistan",
     "url": "https://mariamsaleemlaw.com/payments-market-entry/"
    },
    {
     "@type": "BreadcrumbList",
     "itemListElement": [
      {
       "@type": "ListItem",
       "position": 1,
       "name": "Home",
       "item": "https://mariamsaleemlaw.com/"
      },
      {
       "@type": "ListItem",
       "position": 2,
       "name": "Payments & Market Entry",
       "item": "https://mariamsaleemlaw.com/payments-market-entry/"
      }
     ]
    }
   ]
  }
 }
};
