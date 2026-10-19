import { Link } from 'react-router-dom'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { homePath } from '../../i18n/routing'
import { cn } from '../../lib/cn'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  const { locale } = useLocale()
  const content = useContent()

  return (
    <Link
      to={homePath(locale)}
      onClick={onClick}
      className={cn('inline-flex items-center gap-2.5 whitespace-nowrap', className)}
      aria-label={content.header.home}
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
