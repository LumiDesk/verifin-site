import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="Veri Fin 首页"
    >
      <img
        src="/brand/verifin-icon.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 rounded-[0.55rem]"
      />
      <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">Veri Fin</span>
    </Link>
  )
}
