import { describe, expect, it } from 'vitest'
import { formatBytes, formatDate } from './format'

describe('formatBytes', () => {
  it('formats the release size in MB', () => {
    expect(formatBytes(43_887_681)).toBe('41.9 MB')
  })

  it('handles missing size data', () => {
    expect(formatBytes(0)).toBe('未知大小')
    expect(formatBytes(0, 'en')).toBe('Unknown size')
    expect(formatBytes(0, 'ja')).toBe('不明なサイズ')
  })
})

describe('formatDate', () => {
  it('formats a valid ISO date for Chinese readers', () => {
    expect(formatDate('2026-10-18T06:24:13Z')).toContain('2026')
    expect(formatDate('2026-10-18T06:24:13Z')).toContain('10')
    expect(formatDate('2026-10-18T06:24:13Z')).toContain('18')
  })

  it('formats dates with the active locale', () => {
    expect(formatDate('2026-10-18T06:24:13Z', 'en')).toMatch(/October|Oct/)
    expect(formatDate('2026-10-18T06:24:13Z', 'ja')).toContain('2026')
  })

  it('keeps invalid dates visible instead of throwing', () => {
    expect(formatDate('not-a-date')).toBe('not-a-date')
  })
})
