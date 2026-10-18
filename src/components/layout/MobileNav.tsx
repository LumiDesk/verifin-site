import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { navItems, site } from '../../content/site'
import { ButtonLink } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

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
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              aria-label="关闭导航菜单"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 pt-6" aria-label="移动端导航">
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
            免费下载 Android 版
          </ButtonLink>
          <p className="mt-3 text-center text-xs text-muted">完全免费 · 无账号 · 本地优先</p>
        </div>
      </div>
    </dialog>
  )
}
