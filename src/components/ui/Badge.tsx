import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'default' | 'mint' | 'night'

const toneClasses: Record<BadgeTone, string> = {
  default: 'border-line bg-surface text-muted',
  mint: 'border-mint/20 bg-mint/10 text-[#087a70]',
  night: 'border-white/10 bg-white/[0.06] text-white/70',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
}

export function Badge({ tone = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  )
}
