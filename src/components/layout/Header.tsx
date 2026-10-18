import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems, site } from '../../content/site'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MobileNav } from './MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
          'sticky top-0 z-40 border-b bg-canvas/95 transition-colors duration-300',
          scrolled ? 'border-line' : 'border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-ice hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="在 GitHub 查看 Veri Fin"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ice hover:text-ink"
            >
              <GitHubIcon className="h-[1.1rem] w-[1.1rem]" />
            </a>
            <ButtonLink href={site.releases} target="_blank" rel="noreferrer" size="sm">
              免费下载
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <ButtonLink
              href={site.releases}
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
            >
              下载
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="打开导航菜单"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ice"
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
