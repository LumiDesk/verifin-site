import { ChevronDown } from 'lucide-react'
import { faqs } from '../../content/faqs'
import { site } from '../../content/site'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqSection() {
  return (
    <Section id="faq" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="常见问题"
              title="下载前，你可能想知道。"
              description="关于平台、数据、迁移和 AI 的几个直接回答。"
            />
            <p className="mt-6 text-sm leading-7 text-muted">
              还有别的问题？到{' '}
              <a
                href={site.issues}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                GitHub Issues
              </a>{' '}
              告诉我们。
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
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
