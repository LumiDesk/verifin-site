import { Coffee, GitBranch } from 'lucide-react'
import { site } from '../../content/site'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function OpenSourceSection() {
  return (
    <Section id="open-source">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="开源与支持"
          title="免费，不是试用。"
          description="没有会员解锁，也没有把用户数据变成生意。代码公开，数据可迁移；如果它帮到了你，可以自愿支持开发。"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="flex flex-col rounded-panel border border-line bg-surface p-7 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-brand">
              <GitBranch className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">代码在阳光下</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              Veri Fin 以 GPL-3.0-or-later
              发布。你可以审计它如何处理数据，也可以在遵守许可证的前提下继续改进。
            </p>
            <ButtonLink
              href={site.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="mt-7 self-start"
            >
              查看 GitHub
            </ButtonLink>
          </article>

          <article className="flex flex-col rounded-panel border border-line bg-surface p-7 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#faf0e6] text-[#a5642f]">
              <Coffee className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">支持它继续更新</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              赞助不会解锁功能，也不会改变你的数据。它只是让这款干净的工具能继续维护下去。
            </p>
            <ButtonLink
              href={site.afdian}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="mt-7 self-start"
            >
              在爱发电支持
            </ButtonLink>
          </article>
        </div>
      </Container>
    </Section>
  )
}
