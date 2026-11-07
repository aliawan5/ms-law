import type { ReactNode } from "react";
import type { ServiceCopyBlock, ServiceCopySection } from "@/lib/service-page-content";

const links: Record<string, [string, string][]> = {
 "virtual-assets": [
  ["Virtual Assets Act, 2026", "https://www.pvara.gov.pk/licensing"],
  ["Schedule I", "https://www.pvara.gov.pk/licensing"],
  ["BPRD Circular Letter No. 10 of 2026", "https://www.sbp.org.pk/bprd/2026/CL10.htm"],
 ],
 "cross-border-transactions": [
  ["PVARA approval", "/virtual-assets-regulation/"], ["20+ years", "/our-team/"],
  ["Competition Act, 2010", "https://cc.gov.pk/home/func_faqs"],
  ["Foreign Private Investment (Promotion and Protection) Act, 1976", "https://invest.gov.pk/FAQS"],
 ],
 "strategic-counsel": [["Competition Commission", "/cross-border-transactions/"]],
 "payments-market-entry": [
  ["PVARA", "/virtual-assets-regulation/"], ["foreign investors", "/cross-border-transactions/"],
  ["Regulations for Electronic Money Institutions", "https://www.sbp.org.pk/assets/document/C3-Enclosure-Regulations-EMIs.pdf"],
  ["BPRD Circular Letter No. 10 of 2026", "https://www.sbp.org.pk/bprd/2026/CL10.htm"],
 ],
};

export function ServiceText({ text, slug }: { text: string; slug: string }) {
 const definitions = links[slug] ?? [];
 const result: ReactNode[] = [];
 let rest = text;
 while (rest) {
  const match = definitions.map(([label, href]) => ({ label, href, index: rest.indexOf(label) }))
   .filter(link => link.index !== -1).sort((a, b) => a.index - b.index || b.label.length - a.label.length)[0];
  if (!match) { result.push(rest); break; }
  result.push(rest.slice(0, match.index));
  result.push(<a key={result.length} href={match.href} style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{match.label}</a>);
  rest = rest.slice(match.index + match.label.length);
 }
 return <>{result}</>;
}

export function ServiceBlocks({ blocks, slug }: { blocks: ServiceCopyBlock[]; slug: string }) {
 const result: ReactNode[] = [];
 for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i];
  if (block.tag === "LI") {
   const items: ServiceCopyBlock[] = [block];
   while (blocks[i + 1]?.tag === "LI") items.push(blocks[++i]);
   result.push(<ul key={i} style={{ paddingLeft: "1.25em", marginBlock: "1em", fontSize: "inherit", lineHeight: 1.65 }}>{items.map(item => <li key={item.text}><ServiceText text={item.text} slug={slug} /></li>)}</ul>);
  } else if (block.tag === "H3") {
   result.push(<h3 key={i} style={{ marginTop: "1em" }}>{block.text}</h3>);
  } else if (block.tag === "LINK") {
   const [label, href] = block.text.split(String.fromCharCode(0x2192)).map(part => part.trim());
   result.push(<p key={i}><a href={href} style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{label}</a></p>);
  } else if (block.tag === "P") {
   result.push(<p key={i}><ServiceText text={block.text} slug={slug} /></p>);
  }
 }
 return <>{result}</>;
}

export function ServiceHeading({ text }: { text: string }) {
 const words = text.split(" ");
 const split = Math.ceil(words.length / 2);
 return <>{words.slice(0, split).join(" ")} <span className="ms-accent">{words.slice(split).join(" ")}</span></>;
}

const capitalRows = [
 ["Advisory Services", "15 million"], ["Broker-Dealer Services", "75 million"],
 ["Custody Services", "200 million"], ["Virtual Asset Management and Investment Services", "200 million"],
 ["Virtual Asset Transfer and Settlement Services", "200 million"], ["Fiat-Referenced Token Issuance Services", "300 million"],
 ["Asset-Referenced Token Issuance Services", "300 million"], ["Exchange Services", "500 million"],
 ["Lending and Borrowing Services", "500 million"], ["Virtual Asset Derivatives Services", "500 million"],
 ["Mining Related Virtual Asset Services", "500 million"],
];

export function ServiceCapitalTable({ section }: { section: ServiceCopySection }) {
 return <>
  <p><ServiceText slug="virtual-assets" text={section.blocks[0].text} /></p>
  <table style={{ width: "100%", borderCollapse: "collapse", marginBlock: "1em", fontSize: "14px", lineHeight: 1.5, textAlign: "left" }}>
   <caption className="sr-only">{section.heading}</caption>
   <thead><tr><th scope="col" style={{ padding: "10px 10px 10px 0" }}>Licence category</th><th scope="col" style={{ paddingBlock: "10px" }}>Minimum paid-up capital (PKR)</th></tr></thead>
   <tbody>{capitalRows.map(([category, value]) => <tr key={category} style={{ borderTop: "1px solid var(--steel-600)" }}><th scope="row" style={{ padding: "10px 10px 10px 0", fontWeight: 500 }}>{category}</th><td style={{ paddingBlock: "10px" }}>{value}</td></tr>)}</tbody>
  </table>
  <p>{section.blocks[1].text}</p>
 </>;
}
