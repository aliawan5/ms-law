import Link from "./link";
import { currentPath, serviceAliases, serviceHref } from "@/lib/routes";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, ChevronDown } from "lucide-react";
import { services, firmLinkedin, instagram, xProfile } from "@/lib/content";
import { homeCta } from "@/lib/home-content";
import { aboutContent } from "@/lib/about-content";
import { teamContent } from "@/lib/team-content";
import { serviceDocuments } from "@/lib/service-page-content";
import { serviceFooterTitles } from "@/lib/service-detail-layout";

// Brand marks (simple-icons paths); lucide no longer ships brand logos.
const socials: [string, string, string][] = [
 ["LinkedIn", firmLinkedin, "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"],
 ["Instagram", instagram, "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"],
 ["X", xProfile, "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z"],
];
import { Logo } from "./logo";

const navLinks = [["/", "Home"], ["/about", "About"], ["/our-team", "Our Team"]] as const;
const navLinksAfter = [["/insights-and-media", "Insights & Media"], ["/contact", "Contact"]] as const;

export function SiteHeader() {
 const pathname = currentPath();
 const [mobile, setMobile] = useState(false);
 const [drop, setDrop] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const ref = useRef<HTMLElement>(null);
 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const dismiss = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setDrop(false); };
  document.addEventListener("pointerdown", dismiss);
  return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("pointerdown", dismiss); };
 }, []);
 useEffect(() => {
  document.body.classList.toggle("menu-open", mobile);
  return () => document.body.classList.remove("menu-open");
 }, [mobile]);
 const current = (path: string) => pathname === path ? "page" as const : undefined;
 const item = ([path, label]: readonly [string, string]) => <Link key={path} href={path} aria-current={current(path)}>{label}</Link>;
 return <header ref={ref} className={`ms-header${scrolled || pathname !== "/" ? " is-scrolled" : ""}${mobile ? " is-open" : ""}`} onKeyDown={e => { if (e.key === "Escape") { setDrop(false); setMobile(false); } }}>
  <div className="ms-header-inner">
   <Link href="/" className="ms-header-logo" aria-label="MS Law home"><Logo markOnly /></Link>
   <nav id="main-nav" className="ms-nav" aria-label="Main navigation">
    {navLinks.map(item)}
    <div className={`ms-nav-drop${drop ? " is-open" : ""}`}>
     <div className="ms-nav-drop-trigger">
      <Link href="/services" aria-current={pathname.startsWith("/services") ? "page" : undefined}>Services</Link>
      <button type="button" aria-label="Show service pages" aria-expanded={drop} aria-controls="services-menu" onClick={() => setDrop(!drop)}><ChevronDown size={14} /></button>
     </div>
     <div id="services-menu" className="ms-nav-panel">
      <span className="ms-kicker">Practice areas</span>
      {services.map(s => <Link key={s.slug} href={serviceHref(s.slug)}><small>{s.number}</small><span>{s.title}</span><ArrowUpRight size={15} /></Link>)}
     </div>
    </div>
    {navLinksAfter.map(item)}
    <Link className="ms-nav-mobile-cta" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
   </nav>
   <Link className="ms-header-cta" href="/contact"><span>Let’s talk</span><ArrowUpRight size={15} /></Link>
   <button type="button" className="ms-menu-btn" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-expanded={mobile} aria-controls="main-nav" onClick={() => setMobile(!mobile)}><span /><span /></button>
  </div>
 </header>;
}

export function SiteFooter() {
 const onContact = currentPath() === "/contact";
 const onHome = currentPath() === "/";
 const onAbout = currentPath() === "/about";
 const onTeam = currentPath() === "/our-team";
 const onInsights = currentPath() === "/insights-and-media";
 const serviceSlug = serviceAliases[currentPath()] ?? services.find(s => currentPath() === `/services/${s.slug}`)?.slug;
 const serviceCopy = serviceSlug ? serviceDocuments[serviceSlug] : undefined;
 const serviceTitle = serviceSlug ? serviceFooterTitles[serviceSlug] : undefined;
 return <footer className={`ms-footer${onContact ? " is-compact" : ""}${serviceCopy ? " has-service-copy" : ""}${onInsights ? " has-insights-copy" : ""}`}>
  <div className="ms-footer-lines" aria-hidden="true" />
  {!onContact && <div className="ms-footer-top">
   <div className="ms-wrap ms-cta-stack" data-reveal="repeat">
    <span className="ms-cta-layer ms-cta-layer-back" aria-hidden="true" />
    <span className="ms-cta-layer ms-cta-layer-mid" aria-hidden="true" />
    <div className="ms-cta-card">
     <div>
      <span className="ms-kicker ms-kicker-light">Your next chapter</span>
      {onHome ? <h2>Discuss Your <span className="ms-accent">Regulatory Roadmap</span></h2> : onAbout ? <h2>Talk to Us About <span className="ms-accent">Your Plans in Pakistan</span></h2> : onTeam ? <h2>Work With <span className="ms-accent">Our Team</span></h2> : serviceTitle ? <h2>{serviceTitle[0]} <span className="ms-accent">{serviceTitle[1]}</span></h2> : onInsights ? <h2>Media and <span className="ms-accent">Speaking Enquiries</span></h2> : <h2>Let’s talk about <span className="ms-accent">what’s next.</span></h2>}
     </div>
     <div className="ms-footer-cta-side">
      {!onAbout && !onTeam && (!serviceCopy || serviceCopy.cta.body) && <p>{onHome ? homeCta.body : serviceCopy ? serviceCopy.cta.body : onInsights ? <>For interviews, comment on Pakistan's virtual assets framework or speaking invitations, email <a href="mailto:info@mariamsaleemlaw.com">info@mariamsaleemlaw.com</a>.</> : "A new market, a complex transaction, or a question worth thinking through."}</p>}
      <div className="ms-footer-actions">
       <Link className="ms-btn ms-btn-light" href={onHome || onAbout || onTeam || serviceCopy || onInsights ? "/contact/" : "/contact"}>{onHome ? homeCta.button : onAbout ? aboutContent.ctaButton : onTeam ? teamContent.ctaButton : serviceCopy ? serviceCopy.cta.button : onInsights ? "Contact us" : "Start a conversation"} <ArrowUpRight size={17} /></Link>
       <a className="ms-footer-mail" href="mailto:info@mariamsaleemlaw.com">info@mariamsaleemlaw.com</a>
      </div>
     </div>
    </div>
   </div>
   <div className="ms-wrap ms-footer-divider" data-reveal="repeat" aria-hidden="true">
   <i />
   </div>
  </div>}
  <div className="ms-wrap ms-footer-grid">
   <div className="ms-footer-brand">
    <Link href="/" aria-label="MS Law home"><Logo /></Link>
    <p>Specialist counsel. Lasting perspective.</p>
    <span className="ms-footer-place"><i /> Islamabad, Pakistan · Advising across borders</span>
   </div>
   <div className="ms-footer-col"><span>Explore</span><Link href="/about">About</Link><Link href="/our-team">Our Team</Link><Link href="/services">Services</Link><Link href="/insights-and-media">Insights & Media</Link><Link href="/contact">Contact</Link></div>
   <div className="ms-footer-col"><span>Practice areas</span>{services.map(s => <Link key={s.slug} href={serviceHref(s.slug)}>{s.title}</Link>)}</div>
   <div className="ms-footer-col"><span>Connect</span>
    <div className="ms-footer-social">
     {socials.map(([label, href, path]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg></a>)}
    </div>
   </div>
  </div>
  <div className="ms-footer-word" aria-hidden="true">MARIAM SALEEM</div>
  <div className="ms-wrap ms-footer-bottom">
   <span>© {new Date().getFullYear()} MS Law. All rights reserved.</span>
   <Link href="/privacy">Privacy & legal</Link>
   <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>Back to top <ArrowUp size={14} /></button>
  </div>
 </footer>;
}

export function MotionController() {
 const pathname = currentPath();
 useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const count = (el: HTMLElement) => {
   const target = Number(el.dataset.count); const start = performance.now();
   const step = (now: number) => { const t = Math.min((now - start) / 1600, 1); el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3)))); if (t < 1) requestAnimationFrame(step); };
   el.textContent = "0"; requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if (!entry.isIntersecting) return;
   entry.target.classList.add("revealed");
   entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
   observer.unobserve(entry.target);
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  // data-reveal="repeat" replays the entrance every time the element scrolls back into view.
  const repeat = new IntersectionObserver(entries => entries.forEach(entry => {
   if (entry.intersectionRatio >= .15 && !entry.target.classList.contains("revealed")) {
    entry.target.classList.add("revealed");
    entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
   }
   else if (!entry.isIntersecting) entry.target.classList.remove("revealed");
  }), { threshold: [0, .15] });
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(item => {
   item.classList.add("will-reveal");
   (item.dataset.reveal === "repeat" ? repeat : observer).observe(item);
  });
  return () => { observer.disconnect(); repeat.disconnect(); };
 }, [pathname]);
 return null;
}
