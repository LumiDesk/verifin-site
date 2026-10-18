import type { ReactNode } from 'react'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { useDocumentTitle } from '../lib/useDocumentTitle'

interface LegalPageProps {
  title: string
  children: ReactNode
}

export function LegalPage({ title, children }: LegalPageProps) {
  useDocumentTitle(`${title} · Veri Fin`)

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">法律信息</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-4 text-base leading-8 text-muted">{children}</div>
      </Container>
    </Section>
  )
}
