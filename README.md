# MS Law website

React + TypeScript + Vite. Every page is prerendered to static HTML at build time.

## Run

```
npm.cmd install
npm.cmd run dev        # http://127.0.0.1:5173
```

## Build and publish

```
npm.cmd run build      # type-check, build, then prerender every page
npm.cmd run preview    # check the built site locally
```

Upload the `dist` folder. It contains one `index.html` per page (for example `dist/about/index.html`),
`404.html`, `sitemap.xml` and `robots.txt`. Configure the host to serve `404.html` for missing pages.
The site's canonical domain is https://mariamsaleemlaw.com (set in `lib/routes.ts`).

## Search engines

- Indexing is on: no `noindex`, and `robots.txt` allows all crawlers and lists the sitemap.
- Each page's title, description, canonical address and structured data are defined in `app/site.tsx`.
- `scripts/prerender.mjs` writes the full page HTML, head tags and `sitemap.xml` into `dist`.

## Forms

The contact form and the home page "PVARA Activity Brief" popup send enquiries straight to
info@mariamsaleemlaw.com through FormSubmit (`lib/send-enquiry.ts`). The first submission triggers a
one-time activation email to that inbox; click Activate to start receiving enquiries.

## Where things are

| Path | Contents |
| --- | --- |
| `app/site.tsx` | Page list: titles, descriptions, canonical URLs, schemas |
| `app/main.tsx` | Browser entry: head tags and hydration |
| `app/render-page.tsx`, `scripts/prerender.mjs` | Build-time prerender and sitemap |
| `app/brand.css` | Design system, palette tokens, header, hero, footer, shared styles |
| `app/pages/*.css` | Page-specific styles |
| `components/site/` | One file per page plus shell (header/footer), logo, hero art, motion helpers (`fx.tsx`) |
| `lib/*-content.ts` | Page copy supplied in the SEO content documents |
| `lib/routes.ts` | Paths, canonical service addresses, site URL |
| `public/` | Images, logo masks, favicons, fonts (with licence), robots.txt |

## Credits

Manrope font: Google Fonts, licence in `public/fonts/OFL-Manrope.txt`.
Photo credits are recorded in the `SOURCES.md` files next to the images.
