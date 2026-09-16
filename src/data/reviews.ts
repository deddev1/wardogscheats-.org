export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay on/after Early Access launch (2026-09-10).
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'WARDOGS player',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in-game. Player ESP held after the first EAC rebuild — glad I waited for Undetected before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Control Zone grind',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for ESP and leave soft aim off. Seeing a rotation before a third-party changes everything on Lonestar-style fights.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Vehicle ESP and honest Updating vs Undetected flips are what I wanted before buying.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held on our duo.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night shifts',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Stream-proof on, radar on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Day key first was the right call. Instant delivery and live status sold me before I took the 30-day plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo queue',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Player ESP distance readouts were solid. Radar helped when vehicles swung off-screen. Soft aim smoothing took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Airfield fights',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Vehicle tags alone are worth it — helicopters show up long before you hear them. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'Ranked tryhard',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Soft aim feels human once FOV and smoothing are conservative. I still check status after every EAC note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. ESP + radar covered our Control Zone holds. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'WARDOGS',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Casual lobbies',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'WARDOGS-only shop is a plus. No random filler titles. Feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count }
}
