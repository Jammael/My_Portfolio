/**
 * Joins a path onto Astro's configured base.
 *
 * BASE_URL is "/" locally but "/my_portfolio" on GitHub Pages, and it carries
 * no trailing slash there — naive template concatenation produces
 * "/my_portfoliofavicon.svg". Everything that points at a public asset or an
 * internal route goes through here.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
