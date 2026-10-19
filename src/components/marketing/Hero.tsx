import { ArrowDown, Coins, Database, Download, ShieldCheck } from 'lucide-react'
import { site } from '../../content/site'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { useTheme } from '../../features/theme/theme-context'
import { homePath } from '../../i18n/routing'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { BrandBackdrop } from './BrandBackdrop'
import { PhoneFrame } from './PhoneFrame'

function PhoneShowcase() {
  const { resolvedTheme } = useTheme()
  const content = useContent()
  const screens = content.screens.items

  return (
    <div className="relative mx-auto mt-6 w-full max-w-[570px] sm:mt-0">
      <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(73_177_245_/_0.2),rgb(238_244_251_/_0)_68%)] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto flex min-h-[570px] max-w-[560px] items-center justify-center sm:min-h-[620px]">
        <div className="absolute top-28 left-0 hidden w-[168px] -rotate-[9deg] opacity-90 md:block">
          <PhoneFrame
            src={`/screenshots/assets-${resolvedTheme}.jpg`}
            alt={screens[1]?.alt ?? ''}
          />
        </div>

        <div className="absolute top-24 right-0 hidden w-[168px] rotate-[8deg] opacity-90 md:block">
          <PhoneFrame
            src={`/screenshots/reports-${resolvedTheme}.jpg`}
            alt={screens[2]?.alt ?? ''}
          />
        </div>

        <div className="relative z-10 w-[250px] animate-float sm:w-[280px] lg:w-[292px]">
          <PhoneFrame
            src={`/screenshots/home-${resolvedTheme}.jpg`}
            alt={screens[0]?.alt ?? ''}
            priority
          />
        </div>

        <div className="absolute top-16 right-1 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/10 text-mint">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {content.hero.phoneBadges.local}
        </div>

        <div className="absolute top-52 left-0 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/10 text-sky">
            <Coins className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {content.hero.phoneBadges.multiCurrency}
        </div>

        <div className="absolute right-2 bottom-24 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-iris/10 text-iris">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {content.hero.phoneBadges.noAds}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const { locale } = useLocale()
  const content = useContent()

  return (
    <section className="relative overflow-hidden">
      <BrandBackdrop />

      <Container className="relative">
        <div className="grid items-center gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 lg:pb-24">
          <div className="relative z-10 max-w-[620px]">
            <Badge className="border-brand/15 bg-brand/[0.06] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
              {content.hero.badge}
            </Badge>

            <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-balance text-ink sm:text-[3.5rem] xl:text-[4rem]">
              {content.hero.titleLead} <br />
              <span className="text-brand">{content.hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.releases} target="_blank" rel="noreferrer" size="lg">
                <Download className="h-4 w-4" aria-hidden="true" />
                {content.hero.downloadCta}
              </ButtonLink>
              <ButtonLink href={`${homePath(locale)}#features`} variant="secondary" size="lg">
                {content.hero.featuresCta}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm text-muted">{content.hero.note}</p>
          </div>

          <PhoneShowcase />
        </div>
      </Container>
    </section>
  )
}
