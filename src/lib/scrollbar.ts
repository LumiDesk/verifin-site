interface ScrollMetricsInput {
  viewportHeight: number
  scrollHeight: number
  scrollTop: number
  trackHeight: number
  minThumbHeight?: number
}

export interface ScrollMetrics {
  maxScroll: number
  thumbHeight: number
  thumbTop: number
  maxThumbTop: number
  progress: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function getScrollMetrics({
  viewportHeight,
  scrollHeight,
  scrollTop,
  trackHeight,
  minThumbHeight = 40,
}: ScrollMetricsInput): ScrollMetrics {
  const safeViewport = Math.max(1, viewportHeight)
  const safeScrollHeight = Math.max(safeViewport, scrollHeight)
  const safeTrackHeight = Math.max(0, trackHeight)
  const maxScroll = Math.max(0, safeScrollHeight - safeViewport)
  const thumbHeight = Math.min(
    safeTrackHeight,
    Math.max(minThumbHeight, (safeTrackHeight * safeViewport) / safeScrollHeight),
  )
  const maxThumbTop = Math.max(0, safeTrackHeight - thumbHeight)
  const progress = maxScroll > 0 ? clamp(scrollTop / maxScroll, 0, 1) : 0

  return {
    maxScroll,
    thumbHeight,
    thumbTop: maxThumbTop * progress,
    maxThumbTop,
    progress,
  }
}
