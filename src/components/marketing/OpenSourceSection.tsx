import { Coffee, GitBranch } from 'lucide-react'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function OpenSourceSection() {
  const content = useContent()

  return (
    <Section id="open-source">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={content.openSource.eyebrow}
          title={content.openSource.title}
          description={content.openSource.description}
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="flex flex-col rounded-panel border border-line bg-surface p-7 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-brand">
              <GitBranch className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">
              {content.openSource.codeTitle}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {content.openSource.codeBody}
            </p>
            <ButtonLink
              href={site.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="mt-7 self-start"
            >
              {content.openSource.codeCta}
            </ButtonLink>
          </article>

          <article className="flex flex-col rounded-panel border border-line bg-surface p-7 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-coffee-soft text-coffee">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">
              {content.openSource.supportTitle}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {content.openSource.supportBody}
            </p>
            <ButtonLink
              href={site.afdian}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="mt-7 self-start"
            >
              {content.openSource.supportCta}
            </ButtonLink>
          </article>
        </div>
      </Container>
    </Section>
  )
}
