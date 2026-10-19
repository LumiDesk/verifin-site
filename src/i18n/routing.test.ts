import { describe, expect, it } from 'vitest'
import { getLocaleFromPath, homePath, legalPath, stripLocale, switchLocalePath } from './routing'

describe('locale routing', () => {
  it('detects the locale from the first path segment', () => {
    expect(getLocaleFromPath('/')).toBe('zh')
    expect(getLocaleFromPath('/en')).toBe('en')
    expect(getLocaleFromPath('/ja/privacy')).toBe('ja')
    expect(getLocaleFromPath('/english')).toBe('zh')
  })

  it('strips only a supported locale prefix', () => {
    expect(stripLocale('/')).toBe('/')
    expect(stripLocale('/en')).toBe('/')
    expect(stripLocale('/ja/terms')).toBe('/terms')
    expect(stripLocale('/privacy')).toBe('/privacy')
  })

  it('keeps the current page when switching languages', () => {
    expect(switchLocalePath('/en/privacy', 'ja')).toBe('/ja/privacy')
    expect(switchLocalePath('/ja/terms', 'zh')).toBe('/terms')
    expect(switchLocalePath('/privacy', 'en')).toBe('/en/privacy')
  })

  it('builds localized home and legal paths', () => {
    expect(homePath('zh')).toBe('/')
    expect(homePath('en')).toBe('/en')
    expect(legalPath('ja', 'privacy')).toBe('/ja/privacy')
  })
})
