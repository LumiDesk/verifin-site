import { ChevronDown } from 'lucide-react'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqSection() {
  const content = useContent()

  return (
    <Section id="faq" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={content.faq.eyebrow}
              title={content.faq.title}
              description={content.faq.description}
            />
            <p className="mt-6 text-sm leading-7 text-muted">
              {content.faq.more}{' '}
              <a
                href={site.issues}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {content.faq.linkLabel}
              </a>
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {content.faq.items.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-base font-semibold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="faq-chevron h-4 w-4 shrink-0 text-muted transition-transform duration-200"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pt-3 pr-8 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
