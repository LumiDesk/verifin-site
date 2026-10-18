import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { useDocumentTitle } from '../lib/useDocumentTitle'

interface LegalPageProps {
  title: string
  updatedAt: string
  children: ReactNode
}

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  useDocumentTitle(`${title} · Veri Fin`)

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          返回首页
        </Link>
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">法律信息</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted">最后更新：{updatedAt}</p>
        <div className="mt-10">{children}</div>
      </Container>
    </Section>
  )
}
