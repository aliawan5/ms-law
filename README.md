# MS Law frontend

MS LAW - FRONTEND ONLY

Local React + TypeScript + Vite website. Nothing has been published.

RUN
  npm.cmd install
  npm.cmd run dev
  Open the local URL printed by Vite (normally http://127.0.0.1:5173).

BUILD AND PREVIEW
  npm.cmd run build
  npm.cmd run preview

The dist folder contains only static HTML, CSS, JavaScript and assets. Each known page has its own index.html for direct navigation on static hosting. Configure the host to use 404.html for missing pages when you choose to publish. JavaScript is required to render the site.

CONTACT FORM
The form retains its original appearance. Submitting it shows a local notice that the form is not connected; typed information is not saved or sent. Email links still open the visitor's email application. There are no APIs, databases, authentication, connectors, Workers or deployment bindings in this project.

EDITING
  app/main.tsx                 Frontend page selection and document titles
  lib/routes.ts                Paths emitted as static entry points
  lib/content.ts               Services, publications and external links
  lib/practice-detail.ts       Extra practice-page content (frameworks, checklists, scenarios)
  components/site/home.tsx     Home page (hero and story); home-cards.tsx holds the other home sections
  components/site/hero-*.tsx   Home hero artwork options
  components/site/*.tsx        One file per page: about, team, services, insights, contact, privacy
  components/site/shell.tsx    Navbar, footer and scroll animations
  app/brand.css                Design system, palette tokens and shared/home styles
  app/pages/*.css              Page-specific styles
  public/                      Images, fonts, favicon and robots.txt

CONTENT NOTES
Founder messaging remains proposed copy, and testimonials await approved client feedback. Review the privacy notice and public copy before launch. The preview currently disables indexing in index.html and public/robots.txt.

SOURCES
Company content and portraits: https://mariamsaleemlaw.com/
Visual direction reference: https://sourcepivot.com/
Illustrative architectural photography: Unsplash.
Manrope fonts: Google Fonts, with license in public/fonts/OFL-Manrope.txt.
