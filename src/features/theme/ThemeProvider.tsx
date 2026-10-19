import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { flushSync } from 'react-dom'
import {
  ThemeContext,
  type ResolvedTheme,
  type ThemeContextValue,
  type ThemeMode,
} from './theme-context'

const STORAGE_KEY = 'verifin-site:theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function readMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

function subscribeToSystemTheme(callback: () => void) {
  const media = window.matchMedia(DARK_QUERY)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

function applyResolvedTheme(theme: ResolvedTheme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')

  const themeColor = document.querySelector('meta[name="theme-color"]')
  themeColor?.setAttribute('content', theme === 'dark' ? '#0d1117' : '#f7f8f6')
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(readMode)
  const systemTheme = useSyncExternalStore<ResolvedTheme>(
    subscribeToSystemTheme,
    getSystemTheme,
    () => 'light',
  )
  const resolvedTheme: ResolvedTheme = mode === 'system' ? systemTheme : mode

  useEffect(() => {
    applyResolvedTheme(resolvedTheme)
  }, [resolvedTheme])

  const setMode = useCallback((nextMode: ThemeMode) => {
    try {
      if (nextMode === 'system') {
        window.localStorage.removeItem(STORAGE_KEY)
      } else {
        window.localStorage.setItem(STORAGE_KEY, nextMode)
      }
    } catch {
      // The selected theme still applies for this session.
    }

    const nextResolved = nextMode === 'system' ? getSystemTheme() : nextMode
    const commit = () => {
      applyResolvedTheme(nextResolved)
      flushSync(() => setModeState(nextMode))
    }

    if (
      typeof document.startViewTransition === 'function' &&
      !window.matchMedia(REDUCED_MOTION_QUERY).matches
    ) {
      document.startViewTransition(commit)
    } else {
      commit()
    }
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, resolvedTheme, setMode }),
    [mode, resolvedTheme, setMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
