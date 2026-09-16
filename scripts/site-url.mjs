/** Single source: src/data/site.ts — keep sitemap/canonical scripts in sync with the app. */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const siteTs = readFileSync(join(root, 'src', 'data', 'site.ts'), 'utf8')
const urlMatch = siteTs.match(/export const SITE_URL = ['"]([^'"]+)['"]/)
const hostMatch = siteTs.match(/export const SITE_HOST = ['"]([^'"]+)['"]/)

if (!urlMatch) throw new Error('Could not read SITE_URL from src/data/site.ts')
if (!hostMatch) throw new Error('Could not read SITE_HOST from src/data/site.ts')

export const SITE_URL = (process.env.SITE_URL || urlMatch[1]).replace(/\/$/, '')
export const SITE_HOST = hostMatch[1]

export function siteUrl(path) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
