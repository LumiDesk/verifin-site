import { useCallback, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLocaleFromPath, localeTags, switchLocalePath, type Locale } from '../../i18n/routing'
import { LocaleContext, type LocaleContextValue } from './locale-context'

const STORAGE_KEY = 'verifin-site:locale'

interface LocaleProviderProps {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const locale = getLocaleFromPath(pathname)

  useEffect(() => {
    document.documentElement.lang = localeTags[locale]

    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Language still applies for this session when storage is unavailable.
    }
  }, [locale])

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return

      navigate(switchLocalePath(pathname, nextLocale), {
        state: { preserveScroll: true },
      })
    },
    [locale, navigate, pathname],
  )

  const value = useMemo<LocaleContextValue>(() => ({ locale, setLocale }), [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
