import { Calculator, ScanLine, Sparkles } from 'lucide-react'
import { useContent } from '../../features/locale/useContent'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const icons = {
  math: Calculator,
  ai: Sparkles,
  ocr: ScanLine,
}

export function QuickFeaturesSection() {
  const content = useContent()

  return (
    <Section id="features">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={content.quick.eyebrow}
            title={content.quick.title}
            description={content.quick.description}
          />
          <p className="max-w-sm text-sm leading-7 text-muted lg:pb-1 lg:text-right">
            {content.quick.note}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {content.quick.items.map((feature) => {
            const Icon = icons[feature.key]

            return (
              <article
                key={feature.key}
                className="group rounded-card border border-line bg-surface p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
                <div className="mt-6 rounded-2xl border border-line bg-canvas px-4 py-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-muted">
                    {content.quick.exampleLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{feature.example}</p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
