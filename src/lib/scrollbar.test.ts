import { describe, expect, it } from 'vitest'
import { getScrollMetrics } from './scrollbar'

describe('getScrollMetrics', () => {
  it('maps the top, middle and bottom positions onto the track', () => {
    const base = { viewportHeight: 900, scrollHeight: 2700, trackHeight: 800 }

    expect(getScrollMetrics({ ...base, scrollTop: 0 }).thumbTop).toBe(0)
    expect(getScrollMetrics({ ...base, scrollTop: 900 }).progress).toBeCloseTo(0.5)
    expect(getScrollMetrics({ ...base, scrollTop: 1800 }).progress).toBe(1)

    const bottom = getScrollMetrics({ ...base, scrollTop: 1800 })
    expect(bottom.thumbTop).toBeCloseTo(bottom.maxThumbTop)
  })

  it('keeps a usable minimum thumb height', () => {
    const metrics = getScrollMetrics({
      viewportHeight: 900,
      scrollHeight: 100_000,
      scrollTop: 0,
      trackHeight: 800,
      minThumbHeight: 48,
    })

    expect(metrics.thumbHeight).toBe(48)
  })

  it('handles pages that do not need scrolling', () => {
    const metrics = getScrollMetrics({
      viewportHeight: 900,
      scrollHeight: 700,
      scrollTop: 0,
      trackHeight: 800,
    })

    expect(metrics.maxScroll).toBe(0)
    expect(metrics.progress).toBe(0)
    expect(metrics.thumbTop).toBe(0)
  })
})
