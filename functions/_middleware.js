/**
 * Host redirects for legacy Pages Functions (if invoked).
 * Primary redirects live in workers/site.js for `npx wrangler deploy`.
 * /sitemap.xml is excluded in public/_routes.json so crawlers get a static file.
 */
const CANONICAL_HOST = 'wardogscheats.org'

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const host = url.hostname.toLowerCase()
  if (host === 'assets.local') return context.next()

  if (url.protocol === 'http:' || host !== CANONICAL_HOST) {
    url.protocol = 'https:'
    url.hostname = CANONICAL_HOST
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}
