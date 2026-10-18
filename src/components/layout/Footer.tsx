import { Link } from 'react-router-dom'
import { footerGroups, site } from '../../content/site'
import { Container } from '../ui/Container'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Logo } from '../ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              完全免费、无账号、本地优先的 Android 记账应用。你的账本，保存在你自己的手机里。
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              <GitHubIcon className="h-4 w-4" />在 GitHub 查看源码
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
          <p>无账号 · 无广告 · 无遥测</p>
        </div>
      </Container>
    </footer>
  )
}
