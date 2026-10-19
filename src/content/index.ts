import type { Locale } from '../i18n/routing'
import { en } from './locales/en'
import { ja } from './locales/ja'
import { zh } from './locales/zh'
import type { ContentByLocale } from './types'

export const contentByLocale: ContentByLocale = { zh, en, ja }

export function getContent(locale: Locale) {
  return contentByLocale[locale]
}

export type { SiteContent } from './types'
