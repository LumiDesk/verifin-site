import { useContent } from '../features/locale/useContent'
import { useLocale } from '../features/locale/locale-context'
import { legalPath } from '../i18n/routing'
import { formatDate } from '../lib/format'
import { LegalPage } from './LegalPage'

export function TermsPage() {
  const { locale } = useLocale()
  const content = useContent()
  const document = content.legal.terms

  return (
    <LegalPage
      title={document.title}
      description={document.intro}
      path={legalPath(locale, 'terms')}
      updatedAt={formatDate('2026-09-08', locale)}
      translationNote={content.legal.translationNote}
    >
      <div className="space-y-8">
        <p className="text-sm leading-7 text-muted">{document.intro}</p>
        {document.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-bold tracking-[-0.02em] text-ink">{section.heading}</h2>
            <p className="mt-3 text-sm leading-7 whitespace-pre-line text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </LegalPage>
  )
}
