/** Extra content for each practice page: the legal frameworks involved and what to prepare for a first conversation.
 *  Framework descriptions are general information, phrased at the level of the instrument, not legal advice. */
export type Framework = { tag: string; name: string; body: string };

export const frameworks: Record<string, Framework[]> = {
 "virtual-assets": [
  { tag: "Statute", name: "Virtual Assets Act, 2026", body: "Pakistan’s primary virtual assets law, setting out which activities require a licence and how they are supervised." },
  { tag: "Regulator", name: "Pakistan Virtual Assets Regulatory Authority", body: "PVARA licenses and supervises virtual asset service providers and issues the rules that apply to each activity." },
  { tag: "Licensing", name: "Licences by activity", body: "Licensing is organised by activity, from exchange, custody and broker-dealing to transfer, settlement and token issuance." },
  { tag: "Entry route", name: "Sandbox and No Objection Certificate", body: "The regulatory sandbox and NOC process allow a proposed activity to be scoped and tested before a full licence." },
  { tag: "Reach", name: "Services offered into Pakistan", body: "The framework looks at who a service reaches, so an offshore platform serving users in Pakistan needs to consider it." },
 ],
 "cross-border-transactions": [
  { tag: "Merger control", name: "Competition Act, 2010", body: "Mergers and acquisitions that meet prescribed thresholds require pre-merger clearance from the Competition Commission of Pakistan." },
  { tag: "Process", name: "Competition (Merger Control) Regulations, 2016", body: "Set the thresholds, filing forms and review timelines that shape when a pre-merger application is made." },
  { tag: "Corporate", name: "Companies Act, 2017", body: "Governs share transfers, corporate approvals and filings, administered by the Securities and Exchange Commission of Pakistan." },
  { tag: "Foreign exchange", name: "SBP Foreign Exchange Manual", body: "Sets the rules for inbound foreign investment, its reporting and the repatriation of profits, dividends and capital." },
  { tag: "Sector", name: "Sector regulators", body: "Transactions in telecom, energy and other regulated sectors may also need the approval of the relevant sector regulator." },
 ],
 "strategic-counsel": [
  { tag: "Corporate", name: "Companies Act, 2017", body: "The foundation for directors’ duties, shareholder rights and ongoing corporate compliance." },
  { tag: "Governance", name: "Code of Corporate Governance", body: "The Listed Companies (Code of Corporate Governance) Regulations, 2019 set board and committee standards for listed companies." },
  { tag: "Employment", name: "Provincial employment laws", body: "Much of employment regulation sits at provincial level, so policies need to reflect where people actually work." },
  { tag: "Infrastructure", name: "Public Private Partnership Authority Act, 2017", body: "The federal framework for structuring and procuring infrastructure projects with private partners." },
  { tag: "Commercial", name: "Contract Act, 1872", body: "The basis of commercial contracting in Pakistan, from how agreements are formed to the remedies available." },
 ],
 "payments-market-entry": [
  { tag: "Payments", name: "Payment Systems and Electronic Fund Transfers Act, 2007", body: "Gives the State Bank of Pakistan oversight of payment systems and electronic fund transfers." },
  { tag: "Licensing", name: "Regulations for Electronic Money Institutions", body: "The State Bank’s licensing route for e-money and digital wallet providers." },
  { tag: "Foreign exchange", name: "SBP Foreign Exchange Manual", body: "Governs how foreign currency moves into and out of Pakistan, including inward remittances." },
  { tag: "Stablecoins", name: "Virtual Assets Act, 2026", body: "Brings fiat-referenced token issuance and transfer and settlement services within PVARA licensing." },
  { tag: "Comparative", name: "The UAE side of the corridor", body: "In the UAE, Dubai’s VARA and the Central Bank of the UAE regulate virtual asset and payment token activity." },
 ],
};

export const prepare: Record<string, string[]> = {
 "virtual-assets": ["A description of the proposed activity and who it serves", "Your group structure and where each entity is incorporated", "Licences or registrations held in other jurisdictions", "How custody, settlement or token issuance works in your model", "Your intended timeline for Pakistan"],
 "cross-border-transactions": ["An outline of the transaction and its commercial rationale", "Group structure charts for each party", "Indicative deal value and the parties’ asset and turnover figures", "Any sector licences held by the target", "Your target signing and closing dates"],
 "strategic-counsel": ["An overview of the business and its ownership", "Current board and governance arrangements", "Your key commercial contracts and counterparties", "The regulators you deal with regularly", "Where support is needed most over the coming year"],
 "payments-market-entry": ["A map of the payment flow from sender to recipient", "The currencies and tokens involved", "Licences held in the UAE or other markets", "Banking and settlement partners", "Expected volumes and target customers"],
};

/** Services hub: typical matters where more than one practice is involved. */
export const scenarios: { title: string; body: string; slugs: string[] }[] = [
 { title: "A global exchange entering Pakistan", body: "Licensing scope and structure, how users will fund accounts, and the governance a regulated business needs from day one.", slugs: ["virtual-assets", "payments-market-entry", "strategic-counsel"] },
 { title: "An investor acquiring a Pakistani business", body: "Structuring the investment, diligence on the target, merger clearance where it applies, and the board arrangements that follow.", slugs: ["cross-border-transactions", "strategic-counsel"] },
 { title: "A payments business building a Pakistan–UAE corridor", body: "Settlement design, the foreign exchange interface and where stablecoin rails sit within Pakistan’s licensing framework.", slugs: ["payments-market-entry", "virtual-assets"] },
];
