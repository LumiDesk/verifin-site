import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { homePath } from '../../i18n/routing'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { GitHubIcon } from '../ui/GitHubIcon'
import { LanguageToggle } from '../ui/LanguageToggle'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MobileNav } from './MobileNav'

const navEntries = [
  { key: 'features', hash: 'features' },
  { key: 'privacy', hash: 'privacy' },
  { key: 'screens', hash: 'screens' },
  { key: 'faq', hash: 'faq' },
  { key: 'download', hash: 'download' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale } = useLocale()
  const content = useContent()
  const home = homePath(locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b bg-canvas/85 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300',
          scrolled
            ? 'border-line shadow-[0_10px_30px_-24px_rgb(21_25_34_/_0.45)]'
            : 'border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label={content.header.mainNav}>
            {navEntries.map((item) => (
              <Link
                key={item.key}
                to={`${home}#${item.hash}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-ice hover:text-ink"
              >
                {content.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label={content.header.github}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-ice hover:text-ink"
            >
              <GitHubIcon className="h-[1.1rem] w-[1.1rem]" />
            </a>
            <ButtonLink href={site.releases} target="_blank" rel="noreferrer" size="sm">
              {content.header.download}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <ButtonLink
              href={site.releases}
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {content.nav.download}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={content.header.menuOpen}
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ice"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
