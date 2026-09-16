export type BlogSection = {
  heading: string
  body: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  sections: BlogSection[]
}

/**
 * Commercial / transactional buyer guides only.
 * Forum-style: setup, antivirus, hotkeys, features, load, status — then buy.
 */
export const BLOGS: BlogPost[] = [
  {
    slug: 'features-list',
    title: 'WARDOGS Hacks Features List',
    excerpt:
      'Full features list before you buy WARDOGS Hacks — player ESP, vehicle ESP, radar, soft aim and stream-proof options.',
    metaTitle: 'WARDOGS ESP, Radar & Soft Aim Feature List',
    metaDescription:
      'Compare WARDOGS player ESP, vehicle ESP, 2D radar, soft aim and stream-proof features included before checkout.',
    searchTerms: 'features player esp vehicle esp radar soft aim stream-proof',
    date: '2026-09-15',
    readMinutes: 6,
    tag: 'Features',
    sections: [
      {
        heading: 'What you get when you buy',
        body: [
          'WARDOGS Hacks is one product for WARDOGS on Windows Early Access. You are buying a loader + license with live Undetected / Updating status on wardogshacks.net — not a random multi-game pack.',
          'Open the product page, confirm status, then checkout. Delivery is digital on supported builds.',
        ],
      },
      {
        heading: 'Features list',
        body: [
          'Player ESP / wallhack — boxes, skeletons, distance and health through terrain and buildings.',
          'Vehicle ESP — combat and logistics vehicles marked before they flank you.',
          '2D radar — map-style awareness for off-screen threats.',
          'Soft aim — adjustable FOV, smoothing and hitbox; leave it off if you only want ESP.',
          'Stream-proof — hide supported overlays from capture when you clip or go live.',
          'Config save/load — keep your setup between sessions.',
        ],
      },
      {
        heading: 'Next step',
        body: [
          'Read the hotkeys and setup guides, then buy WARDOGS Hacks when status is Undetected.',
        ],
      },
    ],
  },
  {
    slug: 'hotkeys',
    title: 'WARDOGS Hacks Hotkeys',
    excerpt:
      'Hotkeys and menu keys for WARDOGS Hacks after load — open menu, toggles, and what to leave unbound.',
    metaTitle: 'WARDOGS ESP Menu Hotkeys | Post-Checkout Setup',
    metaDescription:
      'Hotkeys for WARDOGS Hacks after you buy and load: open menu, ESP toggles, radar, soft aim. Simple key list for WARDOGS.',
    searchTerms: 'hotkeys menu keys esp toggle radar soft aim',
    date: '2026-09-15',
    readMinutes: 4,
    tag: 'Hotkeys',
    sections: [
      {
        heading: 'After load',
        body: [
          'Buy WARDOGS Hacks, check Undetected, launch the game, run the loader, wait for a clean inject. Then open the menu with the key listed in your delivery notes (build-specific).',
          'If the menu does not open, do not spam keys — reopen support with your order ID and build name.',
        ],
      },
      {
        heading: 'Typical hotkey jobs',
        body: [
          'Menu open / close — always learn this first.',
          'ESP master toggle — turn player ESP on/off without digging panels.',
          'Radar toggle — same idea for the 2D radar.',
          'Soft aim toggle — leave unbound if you run visuals only.',
          'Stream-proof — flip before you start OBS or clips.',
        ],
      },
      {
        heading: 'Keep it simple',
        body: [
          'Bind only what you use. Extra binds get pressed mid-fight and look obvious. Save your layout once, then re-check status after every WARDOGS patch before you load again.',
        ],
      },
    ],
  },
  {
    slug: 'complete-setup',
    title: 'How to Complete WARDOGS Hacks Setup',
    excerpt:
      'Complete setup for WARDOGS Hacks: buy, disable blockers, launch WARDOGS, load, enable ESP, confirm hotkeys.',
    metaTitle: 'Complete WARDOGS Loader Setup & Load Order',
    metaDescription:
      'Complete setup after checkout: delivery checklist, antivirus exclusions, WARDOGS load order, troubleshooting, ESP configuration and hotkeys.',
    searchTerms: 'complete setup instructions load checklist loader order',
    date: '2026-09-15',
    readMinutes: 7,
    tag: 'Setup',
    sections: [
      {
        heading: '1) Buy and confirm status',
        body: [
          'Open Buy WARDOGS Hacks on wardogshacks.net. If status is Updating, wait. If Undetected, checkout and use only the official delivery link from this site.',
        ],
      },
      {
        heading: '2) Prep the PC',
        body: [
          'Close overlays that fight loaders (Discord overlay, GeForce, RGB suites if they hook games).',
          'Follow the antivirus guide: allowlist the loader folder or pause real-time scan for the install window — see Disable Antivirus.',
          'Do not run cracked mirrors. Support only covers loaders delivered with your order.',
        ],
      },
      {
        heading: '3) Load order',
        body: [
          'Start WARDOGS on Steam.',
          'Run the WARDOGS Hacks loader / license as delivered.',
          'Wait for a successful load.',
          'Open the menu → player ESP on → vehicle ESP on → radar on → stream-proof if you record.',
          'Soft aim off unless you specifically want it.',
        ],
      },
      {
        heading: '4) Save and re-check after patches',
        body: [
          'Save the config. After any WARDOGS / EAC update, check Undetected again before you load. Setup means nothing on a detected build.',
        ],
      },
      {
        heading: '5) Quick checklist',
        body: [
          'Save the delivered loader folder and license details before starting.',
          'Allowlist the delivery folder, close conflicting overlays, and read the current menu key.',
          'If status flips to Updating mid-session, stop and wait for the rebuild.',
        ],
      },
      {
        heading: '6) If load fails',
        body: [
          'Stop and re-check Undetected versus Updating. Restart the game once, confirm antivirus exclusions, and attempt one clean load.',
          'If it still fails, contact support with the order ID and current build. Do not force an outdated loader into an updated game.',
        ],
      },
    ],
  },
  {
    slug: 'disable-antivirus',
    title: 'How to Turn Off Antivirus for WARDOGS Hacks',
    excerpt:
      'Turn off or allowlist antivirus so WARDOGS Hacks loader can run after purchase — Windows Defender and common AV steps.',
    metaTitle: 'WARDOGS Loader Antivirus Exclusions | Windows Defender',
    metaDescription:
      'How to turn off or allowlist antivirus for WARDOGS Hacks after you buy — Defender exclusions, false positives, then load on Undetected.',
    searchTerms: 'disable antivirus defender exclusion allowlist loader false positive',
    date: '2026-09-15',
    readMinutes: 5,
    tag: 'Antivirus',
    sections: [
      {
        heading: 'Why this step exists',
        body: [
          'Cheat loaders are often flagged as generic “trojan” heuristics even when you bought WARDOGS Hacks from wardogshacks.net. That blocks the load. Fix the AV step before you spam the loader.',
        ],
      },
      {
        heading: 'Windows Defender (common path)',
        body: [
          'Open Windows Security → Virus & threat protection → Manage settings.',
          'Add an exclusion for the folder that holds your official WARDOGS Hacks loader (the path from your delivery email).',
          'If the file was already quarantined, restore it from Protection history, then exclude the folder.',
          'Optional short window: pause real-time protection only while you load, then turn it back on. Prefer a permanent exclusion for the delivery folder over leaving Defender off all day.',
        ],
      },
      {
        heading: 'Third-party AV',
        body: [
          'Same idea: exclusion / allowlist for the loader folder, not “turn off forever.” Norton, Avast, Bitdefender, Malwarebytes — use their exclusion UI.',
          'If load still fails after exclusion, restart the PC once, confirm Undetected status, then try one clean launch. Open support with your order ID if it still fails.',
        ],
      },
      {
        heading: 'Then continue setup',
        body: [
          'When the exclusion is ready, follow Complete Setup for the load order and troubleshooting steps. Support can match only official orders and current builds.',
        ],
      },
    ],
  },
  {
    slug: 'undetected-status',
    title: 'Check Undetected Before You Buy or Load',
    excerpt:
      'Undetected vs Updating for WARDOGS Hacks — check status before checkout and before every load after a WARDOGS patch.',
    metaTitle: 'WARDOGS Loader Status | Undetected or Updating',
    metaDescription:
      'Check the current Undetected or Updating state before checkout and before loading after a WARDOGS or EAC patch.',
    searchTerms: 'undetected status updating eac patch load checkout',
    date: '2026-09-15',
    readMinutes: 4,
    tag: 'Status',
    sections: [
      {
        heading: 'Status is part of the purchase',
        body: [
          'Do not buy or load blind. The product page shows Undetected or Updating after WARDOGS / EAC patches. That status is the go / no-go for WARDOGS Hacks.',
        ],
      },
      {
        heading: 'Undetected vs Updating',
        body: [
          'Undetected — current build is cleared for load. Safe to checkout and launch.',
          'Updating — wait. Do not trust old Discord “still UD” screenshots.',
        ],
      },
      {
        heading: 'Refunds and status windows',
        body: [
          'If Updating lasts through your license window with no rebuild, see the Refunds page and contact Support with your order ID.',
        ],
      },
    ],
  },
]

export function getBlog(slug: string) {
  return BLOGS.find((b) => b.slug === slug)
}

export { blogPath } from './blog-paths'
