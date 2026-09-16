import type { FaqItem } from '../data/faqs'

type FaqSectionProps = {
  id?: string
  heading: string
  intro?: string
  items: FaqItem[]
  /** Extra class on the outer section */
  className?: string
}

/**
 * Visible FAQ: real H2/H3 + answer text in the DOM.
 * Structured data comes from page-level FAQPage JSON-LD only (no duplicate microdata).
 */
export function FaqSection({
  id = 'faq',
  heading,
  intro,
  items,
  className = '',
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className={`page-x border-t border-z-soft/15 py-16 sm:py-20 ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {heading}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {intro}
          </p>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.q} className="page-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white sm:text-base">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
