import { BadgeCheck, GitBranch, Smartphone, UserX } from 'lucide-react'
import { useContent } from '../../features/locale/useContent'
import { Container } from '../ui/Container'

const icons = [BadgeCheck, UserX, Smartphone, GitBranch] as const

export function TrustStrip() {
  const content = useContent()

  return (
    <div className="border-y border-line bg-surface/70">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 py-7 lg:grid-cols-4">
          {content.trust.map((item, index) => {
            const Icon = icons[index] ?? BadgeCheck

            return (
              <li key={item.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ice text-brand">
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}
