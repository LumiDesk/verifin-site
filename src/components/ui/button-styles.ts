import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonStyles {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-action text-white shadow-[0_10px_24px_-12px_rgb(52_110_219_/_0.75)] hover:bg-action-strong hover:shadow-[0_14px_28px_-12px_rgb(52_110_219_/_0.7)]',
  secondary: 'border border-line bg-surface text-ink hover:border-ink/20 hover:bg-ice',
  ghost: 'text-ink hover:bg-ink/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-5 text-sm sm:px-6 sm:text-[0.9375rem]',
}

export function buttonStyles({ variant = 'primary', size = 'md', className }: ButtonStyles = {}) {
  return cn(
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 select-none hover:-translate-y-px active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}
