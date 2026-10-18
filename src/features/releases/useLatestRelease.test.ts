import { describe, expect, it } from 'vitest'
import type { GitHubRelease, GitHubReleaseAsset } from '../../lib/github'
import { pickApkAsset } from './useLatestRelease'

function createAsset(name: string): GitHubReleaseAsset {
  return {
    name,
    browser_download_url: `https://example.com/${name}`,
    size: 1024,
    content_type: 'application/vnd.android.package-archive',
  }
}

function createRelease(assets: GitHubReleaseAsset[]): GitHubRelease {
  return {
    tag_name: 'v1.0.0',
    name: 'Veri Fin v1.0.0',
    body: '',
    html_url: 'https://example.com/release',
    published_at: '2026-01-01T00:00:00Z',
    prerelease: false,
    draft: false,
    assets,
  }
}

describe('pickApkAsset', () => {
  it('prefers the arm64 APK when multiple APKs exist', () => {
    const arm64 = createAsset('verifin-v1.0.0-arm64-abc.apk')
    const universal = createAsset('verifin-v1.0.0.apk')

    expect(pickApkAsset(createRelease([universal, arm64]))).toBe(arm64)
  })

  it('falls back to any APK when no arm64 asset exists', () => {
    const universal = createAsset('verifin-v1.0.0.apk')
    const bundle = createAsset('verifin-v1.0.0.aab')

    expect(pickApkAsset(createRelease([bundle, universal]))).toBe(universal)
  })

  it('returns null when the release has no APK', () => {
    expect(pickApkAsset(createRelease([createAsset('verifin-v1.0.0.aab')]))).toBeNull()
  })
})
