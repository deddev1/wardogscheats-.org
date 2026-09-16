import type { FaqItem } from '../data/faqs'
import {
  OG_IMAGE,
  PRODUCT_PRICE_USD,
  SEO_REGIONS,
  SITE_ABOUT,
  SITE_NAME,
  SITE_PURPOSE,
  SITE_URL,
  absoluteUrl,
  type PageSeo,
} from '../data/site'
import { getReviewsAggregate, REVIEWS } from '../data/reviews'
import { getGame, type GameStatus } from '../data/games'
import { PAGE_MEDIA } from '../data/media'

export const PRODUCT_ID = `${SITE_URL}/#product`

function absoluteAsset(src: string) {
  return src.startsWith('http') ? src : `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`
}

/** Stable Organization + WebSite identity for every page. */
export function siteIdentityGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [
        'wardogs cheats',
        'Wardogs Cheats',
        'wardogscheats',
        'wardogscheats.org',
        SITE_URL.replace('https://', ''),
      ],
      url: SITE_URL,
      description: SITE_PURPOSE,
      knowsAbout: [...SITE_ABOUT],
      brand: { '@type': 'Brand', name: SITE_NAME },
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
        width: 48,
        height: 46,
      },
      image: absoluteAsset(OG_IMAGE),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_PURPOSE,
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'Wardogs Cheats',
        description:
          'Cheats for WARDOGS on wardogscheats.org — ESP, soft aim, radar and live EAC status.',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ]
}

export function webPageNode(seo: PageSeo) {
  const img = seo.image || OG_IMAGE
  const page = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(seo.path)}#webpage`,
    url: absoluteUrl(seo.path),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  } as Record<string, unknown>
  const hasVisibleImage =
    ['/', '/wardogs-hacks', '/forums', '/reviews', '/faq', '/support'].includes(seo.path) ||
    seo.path.startsWith('/forums/')
  if (hasVisibleImage) {
    page.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteAsset(img),
      width: 800,
      height: 450,
      caption: seo.title,
    }
  }
  return page
}

function defaultGameStatus(): GameStatus {
  return getGame('wardogs')?.status ?? 'Updating'
}

function productOffer(status: GameStatus = defaultGameStatus()) {
  const availability =
    status === 'Undetected' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
  return {
    '@type': 'Offer',
    url: `${SITE_URL}/wardogs-hacks`,
    availability,
    price: Number.parseFloat(PRODUCT_PRICE_USD),
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
  }
}

function productAggregateRating() {
  const aggregate = getReviewsAggregate()
  return {
    '@type': 'AggregateRating',
    ratingValue: aggregate.ratingValue,
    reviewCount: aggregate.reviewCount,
    bestRating: aggregate.bestRating,
    worstRating: aggregate.worstRating,
  }
}

export function productCoreJsonLd() {
  return {
    '@type': 'Product',
    '@id': PRODUCT_ID,
    name: SITE_NAME,
    description: SITE_PURPOSE,
    url: `${SITE_URL}/`,
    image: absoluteAsset(PAGE_MEDIA.home.image),
    sku: 'wardogs-cheats',
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    category: 'WARDOGS software',
    offers: productOffer(),
    aggregateRating: productAggregateRating(),
  }
}

export function productDetailJsonLd(status: GameStatus) {
  return {
    ...productCoreJsonLd(),
    image: absoluteAsset(PAGE_MEDIA.product.image),
    offers: productOffer(status),
    about: {
      '@type': 'VideoGame',
      name: 'WARDOGS',
      alternateName: 'WARDOGS Early Access',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Supported branch',
        value: 'WARDOGS',
      },
    ],
  }
}

export function productReviewsJsonLd() {
  return {
    ...productCoreJsonLd(),
    review: REVIEWS.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.datePublished,
      reviewBody: review.body,
      name: `${review.author} verified buyer review`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  }
}

/** Merge site identity + WebPage + optional extra nodes into FAQ/Product graph. */
export function buildPageJsonLd(seo: PageSeo, extra: unknown[] = []) {
  const cleaned = extra.filter((node) => {
    if (!node || typeof node !== 'object') return true
    const t = (node as { '@type'?: string })['@type']
    return t !== 'WebSite' && t !== 'Organization'
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [...siteIdentityGraph(), webPageNode(seo), ...cleaned],
  }
}

/** Build FAQPage JSON-LD graph node from the same items shown in FaqSection. */
export function faqPageJsonLd(items: FaqItem[], pageUrl?: string) {
  return {
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq`, url: pageUrl } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export { SEO_REGIONS, absoluteUrl, OG_IMAGE, SITE_NAME, SITE_URL }
