import { localeDateTag, type Locale } from '../i18n/routing'

const unknownSizeLabels: Record<Locale, string> = {
  zh: '未知大小',
  en: 'Unknown size',
  ja: '不明なサイズ',
}

export function formatBytes(bytes: number, locale: Locale = 'zh') {
  if (!Number.isFinite(bytes) || bytes <= 0) return unknownSizeLabels[locale]

  const megabytes = bytes / (1024 * 1024)
  return `${megabytes.toFixed(1)} MB`
}

export function formatDate(isoDate: string, locale: Locale = 'zh') {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return isoDate

  return new Intl.DateTimeFormat(localeDateTag(locale), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
