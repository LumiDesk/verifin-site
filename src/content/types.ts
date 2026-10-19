import type { Locale } from '../i18n/routing'

export interface PageMeta {
  title: string
  description: string
}

export interface LinkCopy {
  label: string
  href: string
  external?: boolean
}

export interface SectionCopy {
  eyebrow: string
  title: string
  description: string
}

export interface FeatureItem {
  key: 'math' | 'ai' | 'ocr'
  title: string
  description: string
  example: string
}

export interface ScreenshotItem {
  name: 'home' | 'assets' | 'reports'
  alt: string
  label: string
  description: string
}

export interface LegalDocument {
  title: string
  intro: string
  sections: Array<{
    heading: string
    body: string
  }>
}

export interface SiteContent {
  meta: {
    home: PageMeta
    notFound: PageMeta
  }
  nav: {
    features: string
    privacy: string
    screens: string
    faq: string
    download: string
  }
  header: {
    home: string
    mainNav: string
    mobileNav: string
    skip: string
    github: string
    download: string
    menuOpen: string
    menuClose: string
  }
  theme: {
    label: string
    settings: string
    system: string
    light: string
    dark: string
    current: string
  }
  language: {
    label: string
    settings: string
  }
  hero: {
    badge: string
    titleLead: string
    titleAccent: string
    description: string
    downloadCta: string
    featuresCta: string
    note: string
    phoneBadges: {
      local: string
      multiCurrency: string
      noAds: string
    }
  }
  trust: Array<{
    label: string
    detail: string
  }>
  quick: SectionCopy & {
    note: string
    exampleLabel: string
    items: FeatureItem[]
  }
  dashboard: SectionCopy & {
    points: string[]
    balanceLabel: string
    budgetLabel: string
    netWorthLabel: string
  }
  privacy: SectionCopy & {
    badges: {
      appLock: string
      sqlite: string
      backup: string
    }
    flow: {
      phone: string
      storage: string
      onlyWhen: string
      webdav: string
      webdavDetail: string
      ai: string
      aiDetail: string
      note: string
    }
    stats: Array<{
      label: string
    }>
  }
  import: SectionCopy & {
    sourcesLabel: string
    sources: string[]
    steps: Array<{
      title: string
      detail: string
    }>
    note: string
  }
  screens: SectionCopy & {
    items: ScreenshotItem[]
  }
  openSource: SectionCopy & {
    codeTitle: string
    codeBody: string
    codeCta: string
    supportTitle: string
    supportBody: string
    supportCta: string
  }
  faq: SectionCopy & {
    more: string
    linkLabel: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  download: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    description: string
    primary: string
    primaryFallback: string
    all: string
    loadingShort: string
    versionLoading: string
    versionError: string
    product: string
    productTagline: string
    labels: {
      latest: string
      published: string
      size: string
      arch: string
    }
    archValue: string
    note: string
  }
  footer: {
    description: string
    github: string
    productTitle: string
    resourceTitle: string
    aboutTitle: string
    links: {
      features: string
      screens: string
      faq: string
      download: string
      github: string
      releases: string
      issues: string
      support: string
      privacy: string
      terms: string
      license: string
    }
    principles: string
  }
  notFound: {
    title: string
    description: string
    home: string
    github: string
  }
  legal: {
    legalLabel: string
    updatedLabel: string
    translationNote?: string
    privacy: LegalDocument
    terms: LegalDocument
  }
}

export type ContentByLocale = Record<Locale, SiteContent>
