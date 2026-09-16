export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are WARDOGS Hacks?',
    a: 'WARDOGS Hacks are tools for WARDOGS on wardogshacks.net — mainly player ESP, vehicle ESP, soft aim and 2D radar — with live Undetected or Updating status after EAC patches.',
  },
  {
    q: 'Do you cover other games?',
    a: 'No. wardogshacks.net sells WARDOGS Hacks only. No filler catalog of unrelated titles.',
  },
  {
    q: 'Is aimbot the main feature?',
    a: 'No. Soft aim is optional. Most buyers come for WARDOGS ESP, vehicle tags and radar awareness.',
  },
  {
    q: 'Are WARDOGS Hacks undetected against EAC?',
    a: 'We mark live Undetected or Updating status after WARDOGS / Easy Anti-Cheat updates. Always check status on wardogshacks.net before you load.',
  },
  {
    q: 'What features are included?',
    a: 'Player ESP / wallhack, vehicle ESP, 2D radar, stream-proof options and configurable soft aim — focused on WARDOGS only. See the Features List guide for the full checklist.',
  },
  {
    q: 'Does it work on Steam Early Access?',
    a: 'Yes. Compatibility tracks the Windows Early Access build (Steam app 1867240). Confirm Undetected after each patch before loading.',
  },
  {
    q: 'How do I buy WARDOGS Hacks?',
    a: 'Start on the homepage, confirm Undetected status and review the price. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load WARDOGS Hacks?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get WARDOGS Hacks support?',
    a: 'Use the Support page and your checkout order channel. Include Undetected/Updating status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read WARDOGS Hacks reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, Undetected honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official WARDOGS game site?',
    a: 'No. We sell WARDOGS Hacks only. Play the game from wardogs.com or WARDOGS on Steam. We are not affiliated with BULKHEAD or Team17.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[3],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[3],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[8],
]
