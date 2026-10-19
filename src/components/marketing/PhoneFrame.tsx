import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

function smallScreenshot(src: string) {
  return src.replace(/(\.[a-z]+)$/i, '-sm$1')
}

function useSmoothImage(src: string, sizes: string) {
  const [displayed, setDisplayed] = useState(src)
  const [outgoing, setOutgoing] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  const displayedRef = useRef(src)
  const outgoingTimer = useRef<number | null>(null)

  useEffect(() => {
    displayedRef.current = displayed
  }, [displayed])

  useEffect(() => {
    if (src === displayedRef.current) return

    let cancelled = false
    let settled = false
    const previous = displayedRef.current
    const preload = new Image()
    preload.decoding = 'async'
    preload.sizes = sizes
    preload.srcset = `${smallScreenshot(src)} 590w, ${src} 1180w`

    const swap = () => {
      if (cancelled || settled) return
      settled = true

      setOutgoing(previous)
      setDisplayed(src)
      setLoaded(true)

      if (outgoingTimer.current) {
        window.clearTimeout(outgoingTimer.current)
      }
      outgoingTimer.current = window.setTimeout(() => setOutgoing(null), 320)
    }

    preload.onload = swap
    preload.onerror = swap
    preload.src = src

    if (preload.complete) {
      void preload.decode().then(swap).catch(swap)
    }

    return () => {
      cancelled = true
    }
  }, [sizes, src])

  useEffect(
    () => () => {
      if (outgoingTimer.current) {
        window.clearTimeout(outgoingTimer.current)
      }
    },
    [],
  )

  return { displayed, outgoing, loaded, setLoaded }
}

export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 292px, (min-width: 640px) 280px, 250px',
}: PhoneFrameProps) {
  const { displayed, outgoing, loaded, setLoaded } = useSmoothImage(src, sizes)
  const srcSetFor = (source: string) => `${smallScreenshot(source)} 590w, ${source} 1180w`
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.complete) {
      setLoaded(true)
    }
  }, [displayed, setLoaded])

  return (
    <div
      className={cn(
        'rounded-[2.2rem] border-[5px] border-night bg-night p-[3px] shadow-phone',
        className,
      )}
    >
      <div className="relative aspect-[1180/2556] overflow-hidden rounded-[1.85rem] bg-night">
        {!loaded ? (
          <div
            aria-hidden="true"
            className="image-skeleton absolute inset-0 bg-[linear-gradient(145deg,#171c24_0%,#0d1117_48%,#1b2431_100%)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/brand/verifin-icon.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 animate-pulse rounded-xl opacity-25"
              />
            </div>
          </div>
        ) : null}

        {outgoing ? (
          <img
            src={outgoing}
            srcSet={srcSetFor(outgoing)}
            sizes={sizes}
            alt=""
            width={1180}
            height={2556}
            aria-hidden="true"
            draggable={false}
            className="screenshot-outgoing absolute inset-0 h-full w-full object-cover"
          />
        ) : null}

        <img
          ref={imageRef}
          src={displayed}
          srcSet={srcSetFor(displayed)}
          sizes={sizes}
          alt={alt}
          width={1180}
          height={2556}
          draggable={false}
          className={cn(
            'relative block h-full w-full object-cover transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
