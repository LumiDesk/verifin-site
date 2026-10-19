import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LocaleProvider } from '../../features/locale/LocaleProvider'
import { useContent } from '../../features/locale/useContent'
import { CustomScrollbar } from '../ui/CustomScrollbar'
import { Footer } from './Footer'
import { Header } from './Header'

function ScrollManager() {
  const location = useLocation()
  const { pathname, hash } = location
  const preserveScroll = Boolean(
    (location.state as { preserveScroll?: boolean } | null)?.preserveScroll,
  )

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }

    if (!preserveScroll) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, preserveScroll])

  return null
}

export function SiteLayout() {
  return (
    <LocaleProvider>
      <SiteShell />
    </LocaleProvider>
  )
}

function SiteShell() {
  const content = useContent()

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {content.header.skip}
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollManager />
      <CustomScrollbar />
    </div>
  )
}
