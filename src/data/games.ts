export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is WARDOGS Hacks only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'wardogs', name: 'WARDOGS', status: 'Updating', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug}-hacks`
}

export function parseGuideSlug(param: string) {
  return param.endsWith('-hacks') ? param.slice(0, -6) : param
}

/**
 * Feature list tuned to what ranks for WARDOGS Hacks
 * Feature bullets for the product page — ESP & awareness first.
 */
export const GUIDE_FEATURES = [
  {
    name: 'Player ESP',
    text: 'Highlight enemy and friendly players with distance, team and health information when supported by the current build.',
  },
  {
    name: 'Vehicle ESP',
    text: 'Track combat and logistics vehicles across WARDOGS’ large combined-arms battlefield.',
  },
  {
    name: '2D Radar',
    text: 'Map-style awareness for nearby players and vehicles while teams contest the moving Control Zone.',
  },
  {
    name: 'Aim assistance',
    text: 'Configurable aim support with field-of-view and smoothing controls where the current release supports them.',
  },
  {
    name: 'Stream-proof mode',
    text: 'Keep supported overlays out of common capture software when recording or streaming.',
  },
  {
    name: 'Configurable hotkeys',
    text: 'Toggle visual and aim features quickly without leaving a 100-player match.',
  },
  {
    name: 'Steam Early Access support',
    text: 'Compatibility is tracked against the Windows Early Access build released on September 10, 2026.',
  },
  {
    name: 'Patch status + support',
    text: 'Updating or Undetected status is reviewed after WARDOGS client patches before access is recommended.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
