import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

/** Generated so the sitemap URL always matches the deploy target. */
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('sitemap-index.xml'), site);

  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${sitemapUrl.href}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
