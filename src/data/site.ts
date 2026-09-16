import { WARDOGS_OG, PAGE_IMAGES } from './images'

export const SITE_URL = 'https://wardogshacks.net'
export const SITE_NAME = 'WARDOGS Hacks'
export const SITE_HOST = 'wardogshacks.net'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: WARDOGS hacks for the PC Early Access release.
 */
export const SITE_PURPOSE =
  'WARDOGS Hacks covers ESP, player information, radar, aim assistance and loader status for the 100-player tactical FPS by BULKHEAD and Team17.'

export const SITE_ABOUT = [
  'WARDOGS Hacks',
  'wardogs hacks',
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
    title: 'WARDOGS Hacks | ESP, Aimbot & Radar for PC',
    description:
      'WARDOGS hacks for Windows PC with player ESP, soft aim, 2D radar and live loader status for BULKHEAD’s 100-player Early Access FPS.',
    path: '/',
    ogType: 'website',
    image: PAGE_IMAGES.home.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  forums: {
    title: 'WARDOGS Hacks Guides | Setup, Hotkeys & Status',
    description:
      'WARDOGS hacks guides covering features, hotkeys, setup, antivirus exclusions and loader status for the Steam Early Access build.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_IMAGES.forums.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  reviews: {
    title: 'WARDOGS Hacks Reviews | Before You Buy',
    description:
      'Early Access player feedback on WARDOGS ESP, soft aim, radar and post-patch rebuilds before you choose a license.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_IMAGES.reviews.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  faq: {
    title: 'WARDOGS Hacks FAQ | Compatibility, Setup & Status',
    description:
      'Answers about WARDOGS PC compatibility, Early Access updates, ESP features, setup, delivery and loader status.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_IMAGES.faq.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  support: {
    title: 'WARDOGS Hacks Support | Loader & Setup Help',
    description:
      'Support for WARDOGS hacks delivery, Windows setup, loader errors, updates and account-specific order questions.',
    path: '/support',
    ogType: 'website',
    image: PAGE_IMAGES.support.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  product: {
    title: 'WARDOGS Hack Features | ESP, Aimbot & Radar',
    description:
      'Compare WARDOGS player ESP, vehicle ESP, soft aim, 2D radar, stream-proof options and current PC Early Access compatibility.',
    path: '/wardogs-hacks',
    ogType: 'product',
    image: PAGE_IMAGES.product.src,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'WARDOGS Hack for PC',
  h2Features: 'ESP, soft aim and radar',
  h2Featured: 'WARDOGS ESP and Radar',
  h2About: 'Built for the new WARDOGS release',
  h2Access: 'Get WARDOGS Hacks',
  h2Faq: 'WARDOGS Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
