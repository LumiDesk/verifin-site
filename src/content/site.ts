export const site = {
  name: 'Veri Fin',
  url: 'https://verifin.talyra42.top',
  description:
    'Veri Fin 是一款完全免费、无账号、无广告的 Android 记账应用。账本保存在本地，支持多账本、多币种、预算、资产、AI 记账与加密备份。',
  github: 'https://github.com/LumiDesk/verifin',
  releases: 'https://github.com/LumiDesk/verifin/releases',
  latestRelease: 'https://github.com/LumiDesk/verifin/releases/latest',
  issues: 'https://github.com/LumiDesk/verifin/issues',
  afdian: 'https://afdian.com/a/talyra42',
  license: 'GPL-3.0-or-later',
} as const

export const navItems = [
  { label: '功能', href: '/#features' },
  { label: '隐私', href: '/#privacy' },
  { label: '界面', href: '/#screens' },
  { label: 'FAQ', href: '/#faq' },
  { label: '下载', href: '/#download' },
] as const

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export const footerGroups: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: '产品',
    links: [
      { label: '功能', href: '/#features' },
      { label: '界面', href: '/#screens' },
      { label: '常见问题', href: '/#faq' },
      { label: '下载', href: '/#download' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: 'GitHub', href: site.github, external: true },
      { label: '版本发布', href: site.releases, external: true },
      { label: '问题反馈', href: site.issues, external: true },
      { label: '支持项目', href: site.afdian, external: true },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '隐私政策', href: '/privacy' },
      { label: '用户协议', href: '/terms' },
      { label: '开源许可', href: `${site.github}/blob/main/LICENSE`, external: true },
    ],
  },
]
