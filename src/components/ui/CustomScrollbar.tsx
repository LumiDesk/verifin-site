import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import { useLocation } from 'react-router-dom'
import { useContent } from '../../features/locale/useContent'
import { cn } from '../../lib/cn'
import { getScrollMetrics, type ScrollMetrics } from '../../lib/scrollbar'

const initialMetrics: ScrollMetrics = {
  maxScroll: 0,
  thumbHeight: 0,
  thumbTop: 0,
  maxThumbTop: 0,
  progress: 0,
}

const HIDE_DELAY = 1400
const SCROLLBAR_QUERY = '(hover: hover) and (pointer: fine) and (min-width: 768px)'

function subscribeToScrollbarAvailability(callback: () => void) {
  const media = window.matchMedia(SCROLLBAR_QUERY)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getScrollbarAvailability() {
  return window.matchMedia(SCROLLBAR_QUERY).matches
}

interface DragState {
  startY: number
  startScroll: number
  maxScroll: number
  maxThumbTop: number
}

function scrollToPosition(top: number, smooth = false) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top,
    behavior: smooth && !reducedMotion ? 'smooth' : 'instant',
  })
}

export function CustomScrollbar() {
  const { pathname } = useLocation()
  const content = useContent()
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<DragState | null>(null)
  const draggingRef = useRef(false)
  const hoveredRef = useRef(false)
  const focusedRef = useRef(false)
  const hideTimer = useRef<number | null>(null)
  const [metrics, setMetrics] = useState(initialMetrics)
  const [visible, setVisible] = useState(false)
  const [dragging, setDragging] = useState(false)
  const scrollbarAvailable = useSyncExternalStore(
    subscribeToScrollbarAvailability,
    getScrollbarAvailability,
    () => false,
  )

  const update = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    setMetrics(
      getScrollMetrics({
        viewportHeight: window.innerHeight,
        scrollHeight: document.documentElement.scrollHeight,
        scrollTop: window.scrollY,
        trackHeight: track.clientHeight,
      }),
    )
  }, [])

  const scheduleUpdate = useCallback(() => {
    update()
  }, [update])

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
    }

    hideTimer.current = window.setTimeout(() => {
      if (!draggingRef.current && !hoveredRef.current && !focusedRef.current) {
        setVisible(false)
      }
    }, HIDE_DELAY)
  }, [])

  const reveal = useCallback(() => {
    setVisible(true)
    scheduleHide()
  }, [scheduleHide])

  useEffect(() => {
    if (!scrollbarAvailable) return

    const initialFrame = requestAnimationFrame(() => {
      update()
      reveal()
    })

    const onScroll = () => {
      scheduleUpdate()
      reveal()
    }
    const onResize = () => {
      scheduleUpdate()
      reveal()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(() => {
            scheduleUpdate()
          })
    resizeObserver?.observe(document.body)
    resizeObserver?.observe(document.documentElement)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      resizeObserver?.disconnect()
      cancelAnimationFrame(initialFrame)
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
    }
  }, [reveal, scheduleUpdate, scrollbarAvailable, update])

  useEffect(() => {
    if (!scrollbarAvailable) return

    const frame = requestAnimationFrame(() => {
      scheduleUpdate()
      reveal()
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, reveal, scheduleUpdate, scrollbarAvailable])

  const onTrackPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || metrics.maxScroll <= 0) return

    const rect = event.currentTarget.getBoundingClientRect()
    const clickY = event.clientY - rect.top
    const thumbCenter = metrics.thumbTop + metrics.thumbHeight / 2
    const direction = clickY < thumbCenter ? -1 : 1
    scrollToPosition(window.scrollY + direction * window.innerHeight * 0.85, true)
  }

  const onThumbPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (metrics.maxScroll <= 0) return
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      startY: event.clientY,
      startScroll: window.scrollY,
      maxScroll: metrics.maxScroll,
      maxThumbTop: metrics.maxThumbTop,
    }
    draggingRef.current = true
    setDragging(true)
    setVisible(true)
  }

  const onThumbPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag) return

    const delta = event.clientY - drag.startY
    const scrollDelta = drag.maxThumbTop > 0 ? (delta / drag.maxThumbTop) * drag.maxScroll : 0
    const nextScroll = Math.min(Math.max(drag.startScroll + scrollDelta, 0), drag.maxScroll)
    scrollToPosition(nextScroll)
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return
    dragRef.current = null
    draggingRef.current = false
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    scheduleHide()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const pageStep = window.innerHeight * 0.85
    let next: number | null = null

    if (event.key === 'ArrowDown') next = window.scrollY + 40
    if (event.key === 'ArrowUp') next = window.scrollY - 40
    if (event.key === 'PageDown') next = window.scrollY + pageStep
    if (event.key === 'PageUp') next = window.scrollY - pageStep
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = metrics.maxScroll

    if (next !== null) {
      event.preventDefault()
      scrollToPosition(next)
      reveal()
    }
  }

  const active = metrics.maxScroll > 0

  if (!scrollbarAvailable) return null

  return (
    <div
      className={cn(
        'custom-scrollbar fixed top-[5.5rem] right-0 bottom-4 z-30 w-5 transition-opacity duration-300',
        visible || dragging ? 'opacity-100' : 'pointer-events-none opacity-0',
        !active && 'pointer-events-none opacity-0',
      )}
      onMouseEnter={() => {
        hoveredRef.current = true
        reveal()
      }}
      onMouseLeave={() => {
        hoveredRef.current = false
        scheduleHide()
      }}
    >
      <div
        ref={trackRef}
        role="scrollbar"
        aria-controls="main"
        aria-label={content.a11y.scrollbar}
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={Math.round(metrics.maxScroll)}
        aria-valuenow={Math.round(metrics.progress * metrics.maxScroll)}
        tabIndex={active ? 0 : -1}
        onKeyDown={onKeyDown}
        onFocus={() => {
          focusedRef.current = true
          reveal()
        }}
        onBlur={() => {
          focusedRef.current = false
          scheduleHide()
        }}
        onPointerDown={onTrackPointerDown}
        className="group relative h-full w-full cursor-pointer touch-none select-none focus-visible:rounded-full focus-visible:outline-offset-2"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-2 w-px bg-line/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <div
          aria-hidden="true"
          data-scrollbar-thumb
          onPointerDown={onThumbPointerDown}
          onPointerMove={onThumbPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          className={cn(
            'absolute right-1 w-1.5 rounded-full bg-ink/25 shadow-[0_2px_8px_rgb(0_0_0_/_0.18)] transition-[background-color,transform] duration-200 group-hover:scale-x-125 group-hover:bg-brand/70',
            dragging && 'scale-x-125 cursor-grabbing bg-brand/80',
            !dragging && 'cursor-grab',
          )}
          style={{
            height: `${metrics.thumbHeight}px`,
            top: `${metrics.thumbTop}px`,
          }}
        />
      </div>
    </div>
  )
}
