import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { homePath } from '../../i18n/routing'
import { ButtonLink } from '../ui/Button'
import { LanguageToggle } from '../ui/LanguageToggle'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { pathname } = useLocation()
  const { locale } = useLocale()
  const content = useContent()
  const home = homePath(locale)
  const navItems = [
    { label: content.nav.features, href: `${home}#features` },
    { label: content.nav.privacy, href: `${home}#privacy` },
    { label: content.nav.screens, href: `${home}#screens` },
    { label: content.nav.faq, href: `${home}#faq` },
    { label: content.nav.download, href: `${home}#download` },
  ]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    onClose()
    // Close the modal whenever navigation changes the route, including language switches.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-canvas p-0 text-ink backdrop:bg-ink/30 lg:hidden"
    >
      <div className="flex min-h-dvh flex-col">
        <div className="flex h-16 items-center justify-between px-5">
          <Logo onClick={onClose} />
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              aria-label={content.header.menuClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 pt-6" aria-label={content.header.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="rounded-2xl px-4 py-4 text-2xl font-semibold tracking-[-0.02em] transition-colors hover:bg-ice"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="rounded-2xl px-4 py-4 text-2xl font-semibold tracking-[-0.02em] transition-colors hover:bg-ice"
          >
            GitHub
          </a>
        </nav>

        <div className="border-t border-line p-5">
          <ButtonLink
            href={site.releases}
            target="_blank"
            rel="noreferrer"
            size="lg"
            className="w-full"
          >
            {content.hero.downloadCta}
          </ButtonLink>
          <p className="mt-3 text-center text-xs text-muted">
            {content.trust[0]?.label} · {content.trust[1]?.label} · {content.trust[2]?.label}
          </p>
        </div>
      </div>
    </dialog>
  )
}
