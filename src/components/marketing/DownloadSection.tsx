import { Download, ExternalLink, LoaderCircle, Smartphone } from 'lucide-react'
import { site } from '../../content/site'
import { useLatestRelease } from '../../features/releases/useLatestRelease'
import { formatBytes, formatDate } from '../../lib/format'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

export function DownloadSection() {
  const { status, release, asset } = useLatestRelease()
  const downloadUrl = asset?.browser_download_url ?? site.latestRelease

  const versionDetail = release
    ? `${release.tag_name} · ${formatDate(release.published_at)}${asset ? ` · ${formatBytes(asset.size)}` : ''}`
    : status === 'error'
      ? '暂时无法读取版本信息，仍可前往 GitHub 下载。'
      : '正在获取最新稳定版…'

  return (
    <Section id="download" tone="night" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_20%,rgb(73_177_245_/_0.18),transparent_72%),radial-gradient(42%_42%_at_88%_82%,rgb(0_196_182_/_0.1),transparent_72%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-mint">下载</p>
            <h2 className="mt-3 text-[2rem] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              你的下一本账，
              <br />
              <span className="text-mint">从这里开始。</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              完全免费，下载即用。无需注册，也没有广告；账本从第一天起就保存在你自己的手机里。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={downloadUrl} target="_blank" rel="noreferrer" size="lg">
                {status === 'loading' ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Download className="h-4 w-4" aria-hidden="true" />
                )}
                {asset ? '下载最新 APK' : '前往 GitHub Releases'}
              </ButtonLink>
              <ButtonLink
                href={site.releases}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="lg"
              >
                查看全部版本
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
                <p className="text-base font-semibold text-white">Veri Fin for Android</p>
                <p className="mt-1 text-xs text-white/60">本地优先 · 完全免费</p>
              </div>
            </div>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs text-white/55">最新稳定版</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {release?.tag_name ?? (status === 'loading' ? '读取中…' : '—')}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">发布时间</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {release ? formatDate(release.published_at) : '—'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">安装包</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {asset ? formatBytes(asset.size) : 'GitHub Releases'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/55">架构</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">arm64-v8a</dd>
              </div>
            </dl>

            <p className="mt-7 flex items-start gap-2 text-xs leading-6 text-white/55">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              GitHub 自分发版只提供 arm64-v8a APK；极老的 32 位设备无法安装。
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
