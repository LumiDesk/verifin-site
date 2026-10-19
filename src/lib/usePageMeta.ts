import { useEffect } from 'react'
import { site } from '../content/site'
import {
  getLocaleFromPath,
  locales,
  localeTags,
  openGraphLocales,
  stripLocale,
  withLocale,
} from '../i18n/routing'

interface PageMetaInput {
  title: string
  description: string
  path: string
}

function setMetaContent(name: string, content: string) {
  document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.setAttribute('content', content)
}

function setPropertyContent(property: string, content: string) {
  document
    .querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
    ?.setAttribute('content', content)
}

function absoluteUrl(path: string) {
  return `${site.url}${path === '/' ? '/' : path.replace(/\/+$/, '')}`
}

export function usePageMeta({ title, description, path }: PageMetaInput) {
  useEffect(() => {
    const locale = getLocaleFromPath(path)
    const url = absoluteUrl(path)
    const basePath = stripLocale(path)

    document.title = title
    document.documentElement.lang = localeTags[locale]

    setMetaContent('description', description)
    setPropertyContent('og:title', title)
    setPropertyContent('og:description', description)
    setPropertyContent('og:url', url)
    setPropertyContent('og:locale', openGraphLocales[locale])
    setMetaContent('twitter:title', title)
    setMetaContent('twitter:description', description)

    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', url)

    for (const alternateLocale of locales) {
      const selector = `link[data-hreflang="${alternateLocale}"]`
      let link = document.head.querySelector<HTMLLinkElement>(selector)

      if (!link) {
        link = document.createElement('link')
        link.rel = 'alternate'
        link.dataset.hreflang = alternateLocale
        link.hreflang = localeTags[alternateLocale]
        document.head.appendChild(link)
      }

      link.href = absoluteUrl(withLocale(alternateLocale, basePath))
    }

    let defaultLink = document.head.querySelector<HTMLLinkElement>(
      'link[data-hreflang="x-default"]',
    )
    if (!defaultLink) {
      defaultLink = document.createElement('link')
      defaultLink.rel = 'alternate'
      defaultLink.dataset.hreflang = 'x-default'
      defaultLink.hreflang = 'x-default'
      document.head.appendChild(defaultLink)
    }
    defaultLink.href = absoluteUrl(withLocale('zh', basePath))
  }, [description, path, title])
}
