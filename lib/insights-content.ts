import { articles, media, type Article } from "./content";

/** Page-specific copy keeps the existing article URLs and the homepage's approved copy. */
export const insightsMeta = {
 title: "Insights & Media | Pakistan Crypto Regulation | MS Law",
 description: "Mariam Saleem's columns in The News and TV appearances on PVARA, stablecoins and Pakistan's Virtual Assets Act, 2026. Read MS Law's latest analysis.",
 url: "https://mariamsaleemlaw.com/insights-and-media/",
};
export const insightsContent = {
 heading: "Insights & Media",
 newsletterHeading: "The Crypto Radar Newsletter",
 newsletter: "A regular briefing on virtual asset regulation in Pakistan, from PVARA licensing news to global stablecoin rules.",
 newsletterUrl: null as string | null,
 linkedin: "https://www.linkedin.com/company/mslaw/",
 otherWritingHeading: "Other Writing: Environmental Law and Policy",
};

const articleCopy: [string, string, string][] = [
 ["A quiet conquest", "A Quiet Conquest", "Why US dollar stablecoins dominate a market now worth more than $320 billion."],
 ["Limits of crypto regulation", "Limits of Crypto Regulation", "What the Virtual Assets Act, 2026 can and cannot achieve for Pakistan's crypto market."],
 ["Fear, fiat and the future", "Fear, Fiat and the Future", "Pakistan's legal foundations for digital assets as PVARA opened exchange licence applications."],
 ["The future in motion", "The Future in Motion", "Observations from GITEX Global on electric air vehicles and cargo drones in Dubai."],
 ["The stablecoin revolution", "The Stablecoin Revolution", "How stablecoins are becoming tools of monetary policy and cross-border liquidity, and what that means for Pakistan."],
 ["The future of money", "The Future of Money", "How stablecoins and digital assets are rewiring global payments."],
 ["A new digital order", "A New Digital Order", "A close reading of the Virtual Assets Ordinance, 2025, compared with EU MiCA and UAE VARA."],
 ["Regulating crypto", "Regulating Crypto", "Why crypto's borderless, decentralised nature makes it hard to regulate."],
 ["Bitcoin, women & wealth", "Mariam Saleem: Bitcoin, Women & Wealth", "An interview feature on women's financial empowerment and digital assets."],
];
export const insightsArticles: Article[] = articleCopy.map(([original, title, description]) => {
 const article = articles.find(item => item.title === original)!;
 return { ...article, title, description, source: article.source === "The News International" ? "The News" : article.source };
});

/** URLs recovered from The News' own Mariam Saleem author archive. */
export const environmentalArticles = [
 { title: "Pakistan's Climate Heroes", date: "11 December 2023", url: "https://www.thenews.com.pk/print/1137025-pakistan-s-climate-heroes", image: "city.jpg" },
 { title: "From Crises to Cultivation", date: "9 October 2023", url: "https://www.thenews.com.pk/print/1117399-from-crises-to-cultivation", image: "columns.jpg" },
 { title: "Seeds for Survival", date: "20 September 2023", url: "https://www.thenews.com.pk/print/1111578-seeds-for-survival", image: "architecture.jpg" },
 { title: "From Gadgets to Graveyards", date: "31 July 2023", url: "https://www.thenews.com.pk/print/1095672-from-gadgets-to-graveyards", image: "city.jpg" },
 { title: "The Plastic Pandemic", date: "23 June 2023", url: "https://www.thenews.com.pk/print/1083545-the-plastic-pandemic", image: "columns.jpg" },
];

export const insightsMedia = [
 { ...media[2], title: "The Future of Digital Assets in Pakistan", url: "https://www.youtube.com/watch?v=GwEXD5BM6Tg" },
 { ...media[1], title: "Crypto: Saviour or Dangerous Experiment" },
 { ...media[0], title: "Bitcoin and Cryptocurrency: The Future of Digital Assets", outlet: "MT Out Loud", image: "media/mt-out-loud.jpg", url: "https://www.youtube.com/watch?v=3E4BwPH74tQ" },
 {
  title: "How Can You Invest in Crypto Legally Under the New PVARA Framework?",
  format: "Podcast", outlet: "Sarmaaya Financials", date: "",
  description: "", image: "media/sarmaaya-financials.jpg", url: "https://www.youtube.com/watch?v=gITd1goflGM",
 },
 {
  title: "Mariam Saleem at Money Matters Expo",
  format: "Event appearance", outlet: "Money Matters", date: "",
  description: "", image: "media/money-matters-expo.jpg", url: "https://www.youtube.com/shorts/HHF-jgulFU0",
 },
 {
  title: "Pakistan's Evolving Crypto Space with Mariam Saleem",
  format: "Podcast", outlet: "The Comparable", date: "",
  description: "", image: "media/the-comparable.jpg", url: "https://www.youtube.com/watch?v=aJVdarRZxZc",
 },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const publicationDate = (date: string) => {
 const [day, month, year] = date.split(" ");
 return `${year}-${String(months.indexOf(month) + 1).padStart(2, "0")}-${day.padStart(2, "0")}`;
};
export const insightsCollectionSchema = {
 "@context": "https://schema.org", "@type": "CollectionPage", name: insightsContent.heading, url: insightsMeta.url,
 author: { "@id": "https://mariamsaleemlaw.com/our-team/#mariam-saleem" },
 mainEntity: {
  "@type": "ItemList",
  itemListElement: [...insightsArticles, ...environmentalArticles.map(item => ({ ...item, source: "The News" }))].map((article, i) => ({
   "@type": "ListItem", position: i + 1,
   item: {
    "@type": "NewsArticle", headline: article.title, datePublished: publicationDate(article.date),
    publisher: { "@type": "Organization", name: article.source },
    author: { "@id": "https://mariamsaleemlaw.com/our-team/#mariam-saleem" }, url: article.url,
   },
  })),
 },
};
