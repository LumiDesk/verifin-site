import { describe, expect, it } from 'vitest'
import { locales } from '../i18n/routing'
import { getContent } from '.'

describe.each(locales)('%s content', (locale) => {
  const content = getContent(locale)

  it('has complete primary page copy', () => {
    expect(content.hero.titleLead.length).toBeGreaterThan(0)
    expect(content.quick.items).toHaveLength(3)
    expect(content.screens.items).toHaveLength(3)
    expect(content.faq.items).toHaveLength(8)
    expect(content.footer.links.privacy.length).toBeGreaterThan(0)
  })

  it('keeps both legal documents complete', () => {
    expect(content.legal.privacy.sections).toHaveLength(9)
    expect(content.legal.terms.sections).toHaveLength(8)
    expect(content.legal.privacy.sections.every((section) => section.heading && section.body)).toBe(
      true,
    )
  })
})
