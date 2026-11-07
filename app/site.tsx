import type { ReactNode } from "react";
import { HomePage, AboutPage, TeamPage, ServicesPage, ServiceDetailPage, InsightsPage, ContactPage, PrivacyPage } from "@/components/site/pages";
import { SiteHeader, SiteFooter, MotionController } from "@/components/site/shell";
import { services } from "@/lib/content";
import { serviceAliases, SITE_URL } from "@/lib/routes";
import { homeMeta, legalServiceSchema, faqSchema } from "@/lib/home-content";
import { aboutMeta, aboutOrganizationSchema, aboutFaqSchema } from "@/lib/about-content";
import { teamMeta, teamPeopleSchema } from "@/lib/team-content";
import { serviceDocuments } from "@/lib/service-page-content";
import { serviceFaqSchema } from "@/lib/service-detail-layout";
import { contactMeta, contactPageSchema } from "@/lib/contact-content";
import { insightsMeta, insightsCollectionSchema } from "@/lib/insights-content";
import NotFound from "./not-found";

/**
 * Everything a page needs, in one place: its title, description, canonical address, structured data
 * and content. The browser (main.tsx) and the build-time prerender (render-page.tsx) both use this,
 * so the HTML search engines receive is exactly what visitors see.
 */
export type Page = {
 path: string;
 title: string;
 description: string;
 canonical?: string;
 schemas: [string, object][];
 htmlClass: string;
 content: ReactNode;
 notFound?: boolean;
};

const SOCIAL_IMAGE = `${SITE_URL}/icon-512.png`;
export { SOCIAL_IMAGE };

export function resolvePage(path: string): Page {
 const service = services.find(item => path === `/services/${item.slug}` || serviceAliases[path] === item.slug);
 const cls = (...names: (string | false)[]) => names.filter(Boolean).join(" ");
 switch (path) {
  case "/": return { path, title: homeMeta.title, description: homeMeta.description, canonical: homeMeta.url, htmlClass: "is-home",
   schemas: [["home-legal-service", legalServiceSchema], ["home-faq-schema", faqSchema]], content: <HomePage /> };
  case "/about": return { path, title: aboutMeta.title, description: aboutMeta.description, canonical: aboutMeta.url, htmlClass: "is-about",
   schemas: [["about-organization", aboutOrganizationSchema], ["about-faq-schema", aboutFaqSchema]], content: <AboutPage /> };
  case "/our-team": return { path, title: teamMeta.title, description: teamMeta.description, canonical: teamMeta.url, htmlClass: "",
   schemas: [["team-people", teamPeopleSchema]], content: <TeamPage /> };
  case "/services": return { path, title: "Legal Services in Pakistan | Virtual Assets, M&A & Fintech | MS Law",
   description: "MS Law's four practice areas: virtual assets and PVARA licensing, cross-border transactions, strategic corporate counsel, and payments and market entry in Pakistan.",
   canonical: `${SITE_URL}/services/`, htmlClass: "is-services", schemas: [], content: <ServicesPage /> };
  case "/insights-and-media": return { path, title: insightsMeta.title, description: insightsMeta.description, canonical: insightsMeta.url, htmlClass: "is-insights",
   schemas: [["insights-collection-schema", insightsCollectionSchema]], content: <InsightsPage /> };
  case "/contact": return { path, title: contactMeta.title, description: contactMeta.description, canonical: contactMeta.url, htmlClass: "",
   schemas: [["contact-schema", contactPageSchema]], content: <ContactPage /> };
  case "/privacy": return { path, title: "Privacy & Legal | MS Law", description: "How MS Law handles enquiries and the information you share through this website.",
   canonical: `${SITE_URL}/privacy/`, htmlClass: "", schemas: [], content: <PrivacyPage /> };
 }
 if (service) {
  const copy = serviceDocuments[service.slug];
  return { path, title: copy.meta.title, description: copy.meta.description, canonical: copy.meta.url, htmlClass: cls("is-services"),
   schemas: [["service-schema", copy.schema], ["service-faq-schema", serviceFaqSchema(service.slug)]], content: <ServiceDetailPage slug={service.slug} /> };
 }
 return { path, title: "Page not found | MS Law", description: "The page you are looking for could not be found.", htmlClass: "", schemas: [], content: <NotFound />, notFound: true };
}

export function App({ page }: { page: Page }) {
 return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader /><main id="main">{page.content}</main><SiteFooter /><MotionController />
 </>;
}
