import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { homePath, legalPath } from '../../i18n/routing'
import { Container } from '../ui/Container'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Logo } from '../ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()
  const { locale } = useLocale()
  const content = useContent()
  const home = homePath(locale)
  const footerGroups = [
    {
      title: content.footer.productTitle,
      links: [
        { label: content.footer.links.features, href: `${home}#features` },
        { label: content.footer.links.screens, href: `${home}#screens` },
        { label: content.footer.links.faq, href: `${home}#faq` },
        { label: content.footer.links.download, href: `${home}#download` },
      ],
    },
    {
      title: content.footer.resourceTitle,
      links: [
        { label: content.footer.links.github, href: site.github, external: true },
        { label: content.footer.links.releases, href: site.releases, external: true },
        { label: content.footer.links.issues, href: site.issues, external: true },
        { label: content.footer.links.support, href: site.afdian, external: true },
      ],
    },
    {
      title: content.footer.aboutTitle,
      links: [
        { label: content.footer.links.privacy, href: legalPath(locale, 'privacy') },
        { label: content.footer.links.terms, href: legalPath(locale, 'terms') },
        {
          label: content.footer.links.license,
          href: `${site.github}/blob/main/LICENSE`,
          external: true,
        },
      ],
    },
  ]

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              {content.footer.description}
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              <GitHubIcon className="h-4 w-4" />
              {content.footer.github}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold tracking-[0.12em] text-ink">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Veri Fin · {site.license}
          </p>
          <p>{content.footer.principles}</p>
        </div>
      </Container>
    </footer>
  )
}
