import { createRoot } from "react-dom/client";
import type { ReactNode } from "react";
import { HomePage, AboutPage, TeamPage, ServicesPage, ServiceDetailPage, InsightsPage, ContactPage, PrivacyPage } from "@/components/site/pages";
import { SiteHeader, SiteFooter, MotionController } from "@/components/site/shell";
import { services } from "@/lib/content";
import { currentPath } from "@/lib/routes";
import { homeMeta, legalServiceSchema, faqSchema } from "@/lib/home-content";
import NotFound from "./not-found";
import "./brand.css";

const pages: Record<string, { title: string; description: string; content: ReactNode }> = {
  "/": { title: homeMeta.title, description: homeMeta.description, content: <HomePage /> },
  "/about": { title: "About", description: "MS Law is a specialist advisory practice in Islamabad combining virtual assets expertise with established cross-border transaction credentials.", content: <AboutPage /> },
  "/our-team": { title: "Our Team", description: "The people of MS Law: leadership and associate counsel in virtual assets, fintech and corporate transactional law.", content: <TeamPage /> },
  "/services": { title: "Services", description: "Virtual assets and regulation, cross-border transactions, strategic corporate counsel, and payments and market entry.", content: <ServicesPage /> },
  "/insights-and-media": { title: "Insights & Media", description: "Columns, interviews and broadcast appearances on digital assets, fintech regulation and Pakistan’s financial infrastructure.", content: <InsightsPage /> },
  "/contact": { title: "Contact", description: "Start a conversation with MS Law about your business, your challenge or your next chapter.", content: <ContactPage /> },
  "/privacy": { title: "Privacy & legal", description: "How MS Law handles enquiries and information shared through this website.", content: <PrivacyPage /> },
};
const path = currentPath();
const service = services.find(item => path === `/services/${item.slug}`);
const page = pages[path] ?? (service
  ? { title: service.title, description: service.description, content: <ServiceDetailPage slug={service.slug} /> }
  : { title: "Page not found", description: "The page you are looking for could not be found.", content: <NotFound /> });
document.documentElement.classList.toggle("is-home", path === "/");
document.documentElement.classList.toggle("is-about", path === "/about");
document.documentElement.classList.toggle("is-services", path === "/services" || path.startsWith("/services/"));
document.title = path === "/" ? page.title : `${page.title} | MS Law`;
document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
document.querySelector('meta[property="og:description"]')?.setAttribute("content", page.description);
if (path === "/") {
  const canonical = document.createElement("link");
  canonical.rel = "canonical"; canonical.href = homeMeta.url;
  document.head.append(canonical);
  for (const schema of [legalServiceSchema, faqSchema]) {
    const tag = document.createElement("script");
    tag.type = "application/ld+json"; tag.textContent = JSON.stringify(schema);
    document.head.append(tag);
  }
}
createRoot(document.getElementById("root")!).render(<>
  <a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader /><main id="main">{page.content}</main><SiteFooter /><MotionController />
</>);
