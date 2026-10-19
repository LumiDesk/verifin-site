import { Cloud, Database, LockKeyhole, Smartphone, Sparkles } from 'lucide-react'
import { useContent } from '../../features/locale/useContent'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

function DataFlow() {
  const content = useContent()
  const flow = content.privacy.flow

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 text-mint">
          <Smartphone className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{flow.phone}</p>
          <p className="mt-0.5 text-xs text-white/60">{flow.storage}</p>
        </div>
      </div>

      <div className="my-5 flex items-center gap-3 text-[0.68rem] text-white/55">
        <span className="h-px flex-1 border-t border-dashed border-white/15" />
        {flow.onlyWhen}
        <span className="h-px flex-1 border-t border-dashed border-white/15" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <Cloud className="h-4 w-4 text-sky" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold text-white">{flow.webdav}</p>
          <p className="mt-1 text-xs leading-5 text-white/60">{flow.webdavDetail}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <Sparkles className="h-4 w-4 text-iris" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold text-white">{flow.ai}</p>
          <p className="mt-1 text-xs leading-5 text-white/60">{flow.aiDetail}</p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-6 text-white/60">{flow.note}</p>
    </div>
  )
}

export function PrivacySection() {
  const content = useContent()

  return (
    <Section id="privacy" tone="surface">
      <Container>
        <div className="relative overflow-hidden rounded-panel bg-night px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(124_83_208_/_0.18),transparent_68%)]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={content.privacy.eyebrow}
                title={content.privacy.title}
                description={content.privacy.description}
                inverted
              />

              <div className="mt-7 flex flex-wrap gap-2">
                <Badge tone="night">
                  <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.privacy.badges.appLock}
                </Badge>
                <Badge tone="night">
                  <Database className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.privacy.badges.sqlite}
                </Badge>
                <Badge tone="night">
                  <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.privacy.badges.backup}
                </Badge>
              </div>
            </div>

            <DataFlow />
          </div>

          <div className="relative mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {content.privacy.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold tracking-[-0.04em] text-mint sm:text-4xl">
                  0
                </p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
