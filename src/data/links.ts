import { blogPath } from './blog-paths'

/** Official WARDOGS destinations for factual game context. */
export const OFFICIAL_WARDOGS_LINKS = [
  {
    label: 'WARDOGS official website',
    href: 'https://wardogs.com/',
    description: 'Official WARDOGS website',
  },
  {
    label: 'WARDOGS on Steam',
    href: 'https://store.steampowered.com/app/1867240/WARDOGS/',
    description: 'Official Windows Early Access store page',
  },
  {
    label: 'WARDOGS at Team17',
    href: 'https://www.team17.com/games/wardogs',
    description: 'Publisher page with official game details',
  },
] as const

/** Primary internal routes for crawl equity. Unique anchors vs nav CTAs. */
export const SITE_PAGE_LINKS = [
  { label: 'Home', to: '/', description: 'Live status, price and checkout' },
  {
    label: 'Product page',
    to: '/wardogs-hacks',
    description: 'ESP, radar, aim and compatibility details',
  },
  {
    label: 'Forums index',
    to: '/forums',
    description: 'Setup forums — antivirus, hotkeys, load',
  },
  {
    label: 'Player reviews',
    to: '/reviews',
    description: 'Player reviews and ratings',
  },
  {
    label: 'FAQ answers',
    to: '/faq',
    description: 'Frequently asked questions',
  },
  {
    label: 'Support desk',
    to: '/support',
    description: 'Delivery, loader and setup help',
  },
  {
    label: 'Privacy policy',
    to: '/privacy',
    description: 'Order data and site privacy',
  },
  {
    label: 'Terms of use',
    to: '/terms',
    description: 'License rules and risk disclaimer',
  },
  {
    label: 'Refund policy',
    to: '/refunds',
    description: 'When digital license refunds apply',
  },
] as const

/** Deep links into forum threads — commercial / transactional. */
export const SITE_GUIDE_LINKS = [
  { label: 'Features list guide', to: blogPath('features-list') },
  { label: 'Hotkeys guide', to: blogPath('hotkeys') },
  { label: 'Complete setup guide', to: blogPath('complete-setup') },
  { label: 'Antivirus exclusion guide', to: blogPath('disable-antivirus') },
  { label: 'Undetected status guide', to: blogPath('undetected-status') },
] as const

/**
 * External checkout go-link → WARDOGS product.
 * Always pair with rel=nofollow so crawlers do not index the redirect.
 */
const CHECKOUT_HOST = ['za', 'deyo', '.com'].join('')
const CHECKOUT_REF = ['Q', 'R', 'H'].join('')
const CHECKOUT_PRODUCT = '/products/wardogs-hacks'

export const CHECKOUT_URL = `https://${CHECKOUT_HOST}/go/${CHECKOUT_REF}?to=${encodeURIComponent(CHECKOUT_PRODUCT)}`

export function getCheckoutUrl(_productSlug?: string): string {
  return CHECKOUT_URL
}

/** Outbound checkout: nofollow so redirect targets are not indexed via our links. */
export const CHECKOUT_REL = 'nofollow noopener noreferrer'
