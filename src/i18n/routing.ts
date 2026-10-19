export const locales = ['zh', 'en', 'ja'] as const

export type Locale = (typeof locales)[number]
export type LegalPageKey = 'privacy' | 'terms'

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
}

export const localeTags: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
}

export const openGraphLocales: Record<Locale, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
}

export function isLocale(value: unknown): value is Locale {
  return value === 'zh' || value === 'en' || value === 'ja'
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return isLocale(segment) ? segment : 'zh'
}

export function stripLocale(pathname: string): string {
  const segments = pathname.split('/')

  if (!isLocale(segments[1])) {
    return pathname || '/'
  }

  const rest = `/${segments.slice(2).join('/')}`
  return rest === '/' ? '/' : rest.replace(/\/+$/, '') || '/'
}

export function withLocale(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (locale === 'zh') return normalized
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`
}

export function homePath(locale: Locale): string {
  return locale === 'zh' ? '/' : `/${locale}`
}

export function legalPath(locale: Locale, page: LegalPageKey): string {
  return withLocale(locale, `/${page}`)
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return withLocale(locale, stripLocale(pathname))
}

export function localeDateTag(locale: Locale): string {
  return localeTags[locale]
}
