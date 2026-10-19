import { Download, ExternalLink, LoaderCircle, Smartphone } from 'lucide-react'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { useLatestRelease } from '../../features/releases/useLatestRelease'
import { formatBytes, formatDate } from '../../lib/format'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

export function DownloadSection() {
  const { locale } = useLocale()
  const content = useContent()
  const { status, release, asset } = useLatestRelease()
  const downloadUrl = asset?.browser_download_url ?? site.latestRelease

  const versionDetail = release
    ? `${release.tag_name} · ${formatDate(release.published_at, locale)}${
        asset ? ` · ${formatBytes(asset.size, locale)}` : ''
      }`
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={downloadUrl} target="_blank" rel="noreferrer" size="lg">
                {status === 'loading' ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Download className="h-4 w-4" aria-hidden="true" />
                )}
                {asset ? content.download.primary : content.download.primaryFallback}
              </ButtonLink>
              <ButtonLink
                href={site.releases}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="lg"
              >
                {content.download.all}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-white/60" aria-live="polite">
              {versionDetail}
            </p>
          </div>

          <div className="rounded-panel border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src="/brand/verifin-icon.svg"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl"
              />
              <div>
                <p className="text-base font-semibold text-white">{content.download.product}</p>
                <p className="mt-1 text-xs text-white/60">{content.download.productTagline}</p>
              </div>
            </div>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs text-white/55">{content.download.labels.latest}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {release?.tag_name ??
                    (status === 'loading' ? content.download.loadingShort : '—')}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">{content.download.labels.published}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {release ? formatDate(release.published_at, locale) : '—'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">{content.download.labels.size}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {asset ? formatBytes(asset.size, locale) : 'GitHub Releases'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">{content.download.labels.arch}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {content.download.archValue}
                </dd>
              </div>
            </dl>

            <p className="mt-7 flex items-start gap-2 text-xs leading-6 text-white/55">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {content.download.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
