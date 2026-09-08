// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

/**
 * `SITE_URL` / `BASE_PATH` let the same source deploy to GitHub Pages
 * (https://jammael.github.io/my_portfolio) or to a custom domain at the root.
 * The GitHub Actions workflow sets both; local dev stays at "/".
 */
const site = process.env.SITE_URL || 'https://jammael.github.io';
const base = process.env.BASE_PATH || '/';

const emittedUrls = new Set();
const buildDate = new Date().toISOString();

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Two pages, ~20 KB of CSS: inlining removes a render-blocking round trip
  // and scored a consistent Lighthouse 100 against 98-99 for an external file.
  build: { inlineStylesheets: 'always' },
  integrations: [
    icon(),
    sitemap({
      // `trailingSlash: 'ignore'` makes Astro offer both "/base" and "/base/"
      // for the same page; normalise to the slashed form and drop duplicates
      // so search engines never see two URLs for one document.
      // No changefreq/priority: Google ignores both, and the typed enum they
      // require buys nothing here.
      serialize(item) {
        const url = item.url.endsWith('/') ? item.url : `${item.url}/`;
        if (emittedUrls.has(url)) return undefined;
        emittedUrls.add(url);
        return { ...item, url, lastmod: buildDate };
      },
    }),
  ],
  image: { responsiveStyles: true },
});
