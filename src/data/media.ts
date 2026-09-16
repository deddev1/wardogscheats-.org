export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

export const WARDOGS_SOLDIER_HERO = '/media/wardogs-soldier-hero.jpg'
export const WARDOGS_TACTICAL = '/media/wardogs-tactical-fps.jpg'
export const WARDOGS_OBJECTIVE = '/media/wardogs-control-zone.jpg'

/** Homepage preview embed — purple tactical trailer. */
export const WARDOGS_HOME_VIDEO = {
  id: 'h5xrkTHh0nU',
  url: 'https://www.youtube.com/watch?v=h5xrkTHh0nU',
  title: 'Wardogs Cheats preview video',
  caption: 'Gameplay preview for WARDOGS ESP, radar and soft aim on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: WARDOGS_SOLDIER_HERO,
    alt: 'Tactical soldier overlooking a mountainous WARDOGS battlefield',
    title: 'Wardogs Cheats for PC',
    caption: 'Feature overview for WARDOGS ESP, radar and aim assistance.',
  },
  product: {
    image: WARDOGS_OBJECTIVE,
    alt: 'WARDOGS ESP and radar feature artwork',
    title: 'WARDOGS ESP, Radar and Aim Features',
    caption: 'Product overview for the WARDOGS Windows Early Access build.',
  },
  forums: {
    image: WARDOGS_OBJECTIVE,
    alt: 'Wardogs Cheats guides and setup artwork',
    title: 'Wardogs Cheats Guides',
    caption: 'Reference for setup, hotkeys, features and status articles.',
  },
  reviews: {
    image: WARDOGS_TACTICAL,
    alt: 'Wardogs Cheats product review artwork',
    title: 'Wardogs Cheats Reviews',
    caption: 'Advertised features and compatibility reviewed for the recent release.',
  },
  faq: {
    image: WARDOGS_OBJECTIVE,
    alt: 'Wardogs Cheats FAQ artwork',
    title: 'Wardogs Cheats FAQ',
    caption: 'Compatibility, status and setup answers for WARDOGS.',
  },
  support: {
    image: WARDOGS_TACTICAL,
    alt: 'Wardogs Cheats support artwork',
    title: 'Wardogs Cheats Support',
    caption: 'Delivery, loader and setup help for WARDOGS.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': {
    ...PAGE_MEDIA.product,
    alt: 'WARDOGS player ESP radar and aim features',
    title: 'Wardogs Cheats Feature List',
    caption: 'Reference for player ESP, vehicle ESP, radar and aim options.',
  },
  hotkeys: {
    ...PAGE_MEDIA.home,
    alt: 'WARDOGS ESP overlay used while configuring menu hotkeys',
    title: 'ESP Menu Hotkey Preview',
    caption: 'Reference for ESP, radar, aim and stream-proof hotkeys.',
  },
  'complete-setup': {
    ...PAGE_MEDIA.product,
    alt: 'Wardogs Cheats complete loader setup',
    title: 'Complete WARDOGS Setup Preview',
    caption: 'Delivery, exclusions and clean load-order reference.',
  },
  'disable-antivirus': {
    ...PAGE_MEDIA.home,
    alt: 'Wardogs Cheats antivirus exclusion setup',
    title: 'Loader Exclusion Setup Preview',
    caption: 'Reference for antivirus exclusions before loading Wardogs Cheats.',
  },
  'undetected-status': {
    ...PAGE_MEDIA.product,
    alt: 'Wardogs Cheats current product status',
    title: 'WARDOGS Loader Status Preview',
    caption: 'Reference for checking Undetected or Updating before loading.',
  },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
