import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { useContent } from '../features/locale/useContent'
import { useLocale } from '../features/locale/locale-context'
import { homePath } from '../i18n/routing'
import { usePageMeta } from '../lib/usePageMeta'

interface LegalPageProps {
  title: string
  description: string
  path: string
  updatedAt: string
  translationNote?: string
  children: ReactNode
}

export function LegalPage({
  title,
  description,
  path,
  updatedAt,
  translationNote,
  children,
}: LegalPageProps) {
  const { locale } = useLocale()
  const content = useContent()
  usePageMeta({ title: `${title} · Veri Fin`, description, path })

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="max-w-3xl">
        <Link
          to={homePath(locale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {content.notFound.home}
        </Link>
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">
          {content.legal.legalLabel}
        </p>
        <h1 className="mt-3 text-[2rem] font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted">
          {content.legal.updatedLabel}: {updatedAt}
        </p>
        {translationNote ? (
          <p className="mt-6 rounded-2xl border border-line bg-surface px-4 py-3 text-xs leading-6 text-muted">
            {translationNote}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </Container>
    </Section>
  )
}
