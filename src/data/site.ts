import { WARDOGS_OG, PAGE_IMAGES } from './images'

export const SITE_URL = 'https://wardogscheats.org'
export const SITE_NAME = 'Wardogs Cheats'
export const SITE_HOST = 'wardogscheats.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Wardogs Cheats for the PC Early Access release.
 */
export const SITE_PURPOSE =
  'Wardogs Cheats covers ESP, player information, radar, aim assistance and loader status for the 100-player tactical FPS WARDOGS by BULKHEAD and Team17 on wardogscheats.org.'

export const SITE_ABOUT = [
  'Wardogs Cheats',
  'wardogs cheats',
  'wardogscheats.org',
  'WARDOGS ESP',
  'WARDOGS aimbot',
  'WARDOGS radar',
  'WARDOGS Early Access',
  'WARDOGS PC',
  'WARDOGS tactical FPS',
  'BULKHEAD WARDOGS',
  'Team17 WARDOGS',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '29.99'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

/** First-party branded social image. */
export const OG_IMAGE = WARDOGS_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  image?: string
  robots?: string
}

/** Unique SEO per route — commercial / transactional intent. */
export const SEO = {
  home: {
    title: 'Wardogs Cheats | ESP, Aimbot & Radar for PC',
    description:
      'Wardogs Cheats for WARDOGS on Windows PC — player ESP, soft aim, 2D radar and live loader status on wardogscheats.org.',
    path: '/',
    ogType: 'website',
    image: PAGE_IMAGES.home.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  forums: {
    title: 'Wardogs Cheats Guides | Setup, Hotkeys & Status',
    description:
      'Wardogs Cheats guides covering features, hotkeys, setup, antivirus exclusions and loader status for the Steam Early Access build.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_IMAGES.forums.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  reviews: {
    title: 'Wardogs Cheats Reviews | Before You Buy',
    description:
      'Early Access player feedback on WARDOGS ESP, soft aim, radar and post-patch rebuilds before you choose a license.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_IMAGES.reviews.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  faq: {
    title: 'Wardogs Cheats FAQ | Compatibility, Setup & Status',
    description:
      'Answers about WARDOGS PC compatibility, Early Access updates, ESP features, setup, delivery and loader status.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_IMAGES.faq.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  support: {
    title: 'Wardogs Cheats Support | Loader & Setup Help',
    description:
      'Support for Wardogs Cheats delivery, Windows setup, loader errors, updates and account-specific order questions.',
    path: '/support',
    ogType: 'website',
    image: PAGE_IMAGES.support.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  product: {
    title: 'Wardogs Cheats Features | ESP, Aimbot & Radar',
    description:
      'Compare WARDOGS player ESP, vehicle ESP, soft aim, 2D radar, stream-proof options and current PC Early Access compatibility.',
    path: '/wardogs-hacks',
    ogType: 'product',
    image: PAGE_IMAGES.product.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Wardogs Cheats for PC',
  h2Features: 'ESP, soft aim and radar',
  h2Featured: 'WARDOGS ESP and Radar',
  h2About: 'Built for the new WARDOGS release',
  h2Access: 'Get Wardogs Cheats',
  h2Faq: 'Wardogs Cheats FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
