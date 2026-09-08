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
  build: { inlineStylesheets: 'auto' },
  integrations: [
    icon(),
    sitemap({
      // `trailingSlash: 'ignore'` makes Astro offer both "/base" and "/base/"
      // for the same page; normalise to the slashed form and drop duplicates
      // so search engines never see two URLs for one document.
      serialize(item) {
        const url = item.url.endsWith('/') ? item.url : `${item.url}/`;
        if (emittedUrls.has(url)) return undefined;
        emittedUrls.add(url);
        return { ...item, url, changefreq: 'monthly', priority: 1, lastmod: buildDate };
      },
    }),
  ],
  image: { responsiveStyles: true },
});
