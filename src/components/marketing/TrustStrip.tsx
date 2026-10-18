import { BadgeCheck, GitBranch, Smartphone, UserX } from 'lucide-react'
import { Container } from '../ui/Container'

const items = [
  {
    icon: BadgeCheck,
    label: '完全免费',
    detail: '没有试用期',
  },
  {
    icon: UserX,
    label: '无账号',
    detail: '打开就能用',
  },
  {
    icon: Smartphone,
    label: '本地优先',
    detail: '账本存在手机里',
  },
  {
    icon: GitBranch,
    label: 'GPL-3.0',
    detail: '开源可审计',
  },
]

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface/70">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 py-7 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ice text-brand">
                <item.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
