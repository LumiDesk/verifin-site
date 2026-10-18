import { useEffect, useRef, useState } from 'react'
import { getLatestRelease, type GitHubRelease, type GitHubReleaseAsset } from '../../lib/github'

const CACHE_KEY = 'verifin:latest-release:v1'
const CACHE_TTL = 10 * 60 * 1000

export interface LatestReleaseState {
  status: 'loading' | 'ready' | 'error'
  release: GitHubRelease | null
  asset: GitHubReleaseAsset | null
}

interface CachedRelease {
  storedAt: number
  release: GitHubRelease
}

export function pickApkAsset(release: GitHubRelease): GitHubReleaseAsset | null {
  return (
    release.assets.find((asset) => /arm64.*\.apk$/i.test(asset.name)) ??
    release.assets.find((asset) => /\.apk$/i.test(asset.name)) ??
    null
  )
}

function readCache(): GitHubRelease | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null

    const cached = JSON.parse(raw) as CachedRelease
    if (
      !cached.release?.tag_name ||
      !Array.isArray(cached.release.assets) ||
      Date.now() - cached.storedAt > CACHE_TTL
    ) {
      window.sessionStorage.removeItem(CACHE_KEY)
      return null
    }

    return cached.release
  } catch {
    window.sessionStorage.removeItem(CACHE_KEY)
    return null
  }
}

function writeCache(release: GitHubRelease) {
  if (typeof window === 'undefined') return

  try {
    const cached: CachedRelease = { storedAt: Date.now(), release }
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(cached))
  } catch {
    // Storage can be unavailable in private browsing; the download still works.
  }
}

function initialReleaseState(): LatestReleaseState {
  const cached = readCache()
  if (!cached) {
    return { status: 'loading', release: null, asset: null }
  }

  return { status: 'ready', release: cached, asset: pickApkAsset(cached) }
}

export function useLatestRelease(): LatestReleaseState {
  const [state, setState] = useState<LatestReleaseState>(initialReleaseState)
  const requested = useRef(state.status !== 'loading')

  useEffect(() => {
    if (requested.current) return
    requested.current = true

    const controller = new AbortController()

    getLatestRelease(controller.signal)
      .then((release) => {
        writeCache(release)
        setState({ status: 'ready', release, asset: pickApkAsset(release) })
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setState({ status: 'error', release: null, asset: null })
        }
      })

    return () => {
      requested.current = false
      controller.abort()
    }
  }, [])

  return state
}
