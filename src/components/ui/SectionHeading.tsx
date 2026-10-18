import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'text-xs font-semibold tracking-[0.14em]',
            inverted ? 'text-mint' : 'text-brand',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'mt-3 text-[2rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.5rem] lg:text-[3rem]',
          inverted ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-8 sm:text-lg',
            inverted ? 'text-white/65' : 'text-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
