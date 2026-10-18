import { cn } from '../../lib/cn'

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneFrame({ src, alt, className, priority = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'rounded-[2.2rem] border-[5px] border-night bg-night p-[3px] shadow-phone',
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.85rem] bg-night">
        <img
          src={src}
          alt={alt}
          width={1180}
          height={2556}
          className="block h-auto w-full"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    </div>
  )
}
