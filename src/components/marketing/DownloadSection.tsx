import {
  ArrowUpRight,
  Check,
  CircleAlert,
  Globe2,
  LoaderCircle,
  MapPin,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { site } from '../../content/site'
import type { DownloadSourceId } from '../../content/types'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { useLatestRelease } from '../../features/releases/useLatestRelease'
import { cn } from '../../lib/cn'
import { formatBytes, formatDate } from '../../lib/format'
import { Badge } from '../ui/Badge'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

type SourceIcon = ComponentType<{ className?: string }>

const sourceLinks: Record<DownloadSourceId, string> = {
  pgyer: site.pgyer,
  github: site.releases,
}

const sourceIcons: Record<DownloadSourceId, SourceIcon> = {
  pgyer: MapPin,
  github: GitHubIcon,
}

const sourceStyles: Record<
  DownloadSourceId,
  {
    card: string
    icon: string
    meta: string
    arrow: string
  }
> = {
  pgyer: {
    card: 'border-mint/25 bg-[linear-gradient(135deg,rgb(0_196_182_/_0.12),rgb(255_255_255_/_0.035))] hover:border-mint/45 hover:bg-[linear-gradient(135deg,rgb(0_196_182_/_0.16),rgb(255_255_255_/_0.05))]',
    icon: 'bg-mint/10 text-mint',
    meta: 'text-mint',
    arrow: 'text-mint',
  },
  github: {
    card: 'border-white/10 bg-white/[0.04] hover:border-sky/30 hover:bg-white/[0.065]',
    icon: 'bg-sky/10 text-sky',
    meta: 'text-sky',
    arrow: 'text-white/50',
  },
}

const fallbackIcon: LucideIcon = Globe2

export function DownloadSection() {
  const { locale } = useLocale()
  const content = useContent()
  const { status, release, asset } = useLatestRelease()

  const statusIcon = status === 'loading' ? LoaderCircle : status === 'error' ? CircleAlert : Check
  const StatusIcon = statusIcon
  const detail = release
    ? `${formatDate(release.published_at, locale)}${asset ? ` · ${formatBytes(asset.size, locale)}` : ''}`
    : status === 'error'
      ? content.download.versionError
      : content.download.versionLoading

  return (
    <Section id="download" tone="night" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_20%,rgb(73_177_245_/_0.18),transparent_72%),radial-gradient(42%_42%_at_88%_82%,rgb(0_196_182_/_0.1),transparent_72%)]"
      />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-mint">
              {content.download.eyebrow}
            </p>
            <h2 className="mt-3 text-[2rem] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {content.download.titleLead} <br />
              <span className="text-mint">{content.download.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              {content.download.description}
            </p>

            <div className="mt-7 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <StatusIcon
                  className={cn(
                    'h-4 w-4',
                    status === 'error' ? 'text-expense' : 'text-mint',
                    status === 'loading' && 'animate-spin',
                  )}
                  aria-hidden="true"
                />
                {release?.tag_name ?? content.download.loadingShort}
              </span>
              <span className="h-3 w-px bg-white/15" aria-hidden="true" />
              <span className="text-xs text-white/55" aria-live="polite">
                {detail}
              </span>
            </div>

            <p className="mt-5 flex max-w-xl items-start gap-2 text-xs leading-6 text-white/55">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {content.download.note}
            </p>
          </div>

          <div className="rounded-panel border border-white/10 bg-white/[0.035] p-5 shadow-[0_32px_80px_-50px_rgb(0_0_0_/_0.8)] sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-mint">
                  {content.download.sourcesEyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-white">
                  {content.download.sourcesTitle}
                </h3>
              </div>
              <p className="max-w-[15rem] text-xs leading-5 text-white/45 sm:text-right">
                {content.download.sourcesHint}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.download.sources.map((source) => {
                const Icon = sourceIcons[source.id] ?? fallbackIcon
                const styles = sourceStyles[source.id]

                return (
                  <a
                    key={source.id}
                    href={sourceLinks[source.id]}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      'group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border p-5 transition-[background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-36px_rgb(0_0_0_/_0.8)] motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                      styles.card,
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={cn(
                          'inline-flex h-11 w-11 items-center justify-center rounded-xl',
                          styles.icon,
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className={cn(
                          'h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                          styles.arrow,
                        )}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-5">
                      <p className="text-lg font-bold tracking-[-0.02em] text-white">
                        {source.label}
                      </p>
                      <p className={cn('mt-1 text-xs font-semibold', styles.meta)}>{source.meta}</p>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-6 text-white/60">
                      {source.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <span className="text-xs font-semibold text-white/80">{source.cta}</span>
                      {source.badge ? (
                        <Badge tone="mint" className="shrink-0">
                          {source.badge}
                        </Badge>
                      ) : null}
                    </div>
                  </a>
                )
              })}
            </div>

            <p className="mt-5 text-xs leading-6 text-white/45">{content.download.sourcesNote}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-7 border-t border-white/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/brand/verifin-icon.svg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-2xl"
            />
            <div>
              <p className="text-sm font-semibold text-white">{content.download.product}</p>
              <p className="mt-1 text-xs text-white/55">{content.download.productTagline}</p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-white/45">{content.download.labels.latest}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {release?.tag_name ?? (status === 'loading' ? content.download.loadingShort : '—')}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/45">{content.download.labels.published}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {release ? formatDate(release.published_at, locale) : '—'}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/45">{content.download.labels.size}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {asset ? formatBytes(asset.size, locale) : 'GitHub Releases'}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/45">{content.download.labels.arch}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {content.download.archValue}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </Section>
  )
}
