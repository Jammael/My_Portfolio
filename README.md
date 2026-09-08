# Jammael Magallanes — Portfolio

Personal portfolio of **Jammael Magallanes**, AI Automation Builder & Web Developer.
Static site, no runtime JavaScript framework, built for speed, search engines and readability.

**Live site:** https://jammael.github.io/my_portfolio/

---

## The stack — and why

| Layer | Choice | Why it fits a portfolio |
| --- | --- | --- |
| Framework | [Astro 7](https://astro.build) | Ships static HTML with zero framework JS. Fastest possible portfolio, ideal for SEO, still component-based to edit. |
| Styling | Hand-written CSS + custom properties | Full control over the accessible type scale and the exact brand palette. No utility-class build step, no unused CSS. |
| Typography | [Poppins](https://fonts.google.com/specimen/Poppins) via `@fontsource` | Self-hosted (latin subset) — no Google Fonts request, no layout shift, better privacy and Core Web Vitals. |
| Icons | [Phosphor Icons](https://phosphoricons.com) via `astro-icon` | Inlined as SVG at build time; only the icons actually used are bundled. |
| Images | `astro:assets` + Sharp | Automatic WebP, correct `width`/`height`, responsive `srcset`. |
| SEO | `@astrojs/sitemap` + hand-rolled metadata | Sitemap, robots.txt, canonical URLs, Open Graph, Twitter cards, JSON-LD. |
| Hosting | GitHub Pages via GitHub Actions | Free, automatic on every push to `main`. |

Everything builds to plain files in `dist/` — roughly 400 KB total, most of it fonts and the social image.

Lighthouse on the production build: **100 performance, 100 accessibility,
100 best practices, 100 SEO** (CLS 0, TBT 0 ms, LCP 1.5 s).

---

## Running it locally

```bash
npm install     # once
npm run dev     # http://localhost:4321
```

Other commands:

```bash
npm run check     # type-check .astro files, config and data
npm run build     # production build into dist/
npm run preview   # serve the built site at http://localhost:4321
```

`npm run check` also validates Phosphor icon names against the installed set, so
a typo like `ph:foldr-open-bold` fails instead of silently rendering nothing.
TypeScript is pinned to 6.x because `astro check` does not yet support the
TypeScript 7 native compiler.

---

## Editing the content

**All copy lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Change the text there and every section updates — no HTML to hunt through.

| What you want to change | Where |
| --- | --- |
| Name, role, email, phone, availability | `profile` |
| Page title, meta description, keywords | `seo` |
| Left-hand navigation items | `nav` |
| "Tools I work with" marquee | `tools` |
| The three stat cards | `stats` |
| Project cards | `projects` |
| Services list | `services` |
| Skill groups | `skillGroups` |
| Education, certifications, work history | `timeline` |
| Contact channels | `contactChannels` |

Icon names come from Phosphor — browse them at [phosphoricons.com](https://phosphoricons.com)
and use the `ph:` prefix, e.g. `ph:rocket-launch-bold`.

Colours, spacing and the type scale are the custom properties at the top of
[`src/styles/global.css`](src/styles/global.css).

---

## Accessibility

The site is built for readers with low vision and for older readers:

- **18px root font size** with a body size of ~19px and 1.7 line height — well above the usual 16px default.
- **A / A+ / A++ text-size control** in the sidebar (up to 132%), remembered between visits via `localStorage`.
- **Contrast beyond WCAG AA** — body text sits at roughly 8:1, headings above 15:1.
- **Large targets** — navigation rows are 52px tall, buttons 54px, contact rows 62px.
- **Zero axe-core violations** on desktop and mobile (WCAG 2.1 AA + best-practice rules).
- Skip link, visible focus rings, semantic landmarks, ARIA-correct navigation state.
- `prefers-reduced-motion` stops the marquee and all transitions; `prefers-contrast: more` darkens borders and secondary text.
- Fully keyboard-operable, and the layout survives 200% browser zoom without horizontal scrolling.

---

## SEO

- Descriptive `<title>` and meta description, canonical URL on every page.
- Open Graph + Twitter card metadata with a generated 1200×630 social image.
- JSON-LD structured data: `Person` (job title, skills, location, education, employer) and `WebSite`.
- `sitemap-index.xml` and a `robots.txt` generated from the deploy URL.
- Semantic HTML: one `<h1>`, ordered headings, landmark elements, descriptive link text and alt text.
- Static HTML, WebP images, and preloaded self-hosted fonts plus inlined CSS — no render-blocking requests and zero layout shift.
- `site.webmanifest`, favicon and Apple touch icon.

---

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

**One-time setup:** in the repository, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**.

### Using a custom domain

1. In `.github/workflows/deploy.yml`, set `SITE_URL` to your domain and `BASE_PATH` to `/`.
2. Add a `public/CNAME` file containing the domain.
3. Point the domain's DNS at GitHub Pages and set it under **Settings → Pages**.

---

## Licence

Code is released under the [MIT Licence](LICENSE). The photograph and written
content are © Jammael Magallanes.
