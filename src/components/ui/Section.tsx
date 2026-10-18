import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type SectionTone = 'canvas' | 'surface' | 'night'

const toneClasses: Record<SectionTone, string> = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
  night: 'bg-night text-white',
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone
}

export function Section({ tone = 'canvas', className, ...props }: SectionProps) {
  return (
    <section
      className={cn('scroll-mt-24 py-20 sm:py-24 lg:py-32', toneClasses[tone], className)}
      {...props}
    />
  )
}
