import { useContent } from '../../features/locale/useContent'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ImportSection() {
  const content = useContent()

  return (
    <Section id="import">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow={content.import.eyebrow}
            title={content.import.title}
            description={content.import.description}
          />

          <div className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted">
              {content.import.sourcesLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.import.sources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-line bg-ice/60 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {source}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
              {content.import.steps.map((step, index) => (
                <div key={step.title}>
                  <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{step.detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-muted">{content.import.note}</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
