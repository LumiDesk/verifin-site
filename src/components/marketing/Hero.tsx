import { ArrowDown, Coins, Database, Download, ShieldCheck } from 'lucide-react'
import { site } from '../../content/site'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { BrandBackdrop } from './BrandBackdrop'
import { PhoneFrame } from './PhoneFrame'

function PhoneShowcase() {
  return (
    <div className="relative mx-auto mt-6 w-full max-w-[570px] sm:mt-0">
      <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(73_177_245_/_0.2),rgb(238_244_251_/_0)_68%)] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto flex min-h-[570px] max-w-[560px] items-center justify-center sm:min-h-[620px]">
        <div className="absolute top-28 left-0 hidden w-[168px] -rotate-[9deg] opacity-90 md:block">
          <PhoneFrame src="/screenshots/assets.jpg" alt="Veri Fin 资产页：净资产、账户与信用账户" />
        </div>

        <div className="absolute top-24 right-0 hidden w-[168px] rotate-[8deg] opacity-90 md:block">
          <PhoneFrame
            src="/screenshots/reports.jpg"
            alt="Veri Fin 看板页：本月收支、预算与分类排行"
          />
        </div>

        <div className="relative z-10 w-[250px] animate-float sm:w-[280px] lg:w-[292px]">
          <PhoneFrame
            src="/screenshots/home.jpg"
            alt="Veri Fin 首页：本月支出、最近交易与快捷记账"
            priority
          />
        </div>

        <div className="absolute top-16 right-1 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/10 text-mint">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          本地存储
        </div>

        <div className="absolute top-52 left-0 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/10 text-sky">
            <Coins className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          多币种
        </div>

        <div className="absolute right-2 bottom-24 hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft sm:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-iris/10 text-iris">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          无广告
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BrandBackdrop />

      <Container className="relative">
        <div className="grid items-center gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 lg:pb-24">
          <div className="relative z-10 max-w-[620px]">
            <Badge className="border-brand/15 bg-brand/[0.06] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
              Android · 完全免费 · 本地优先
            </Badge>

            <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-balance text-ink sm:text-[3.5rem] lg:text-[4rem]">
              把账记清楚，
              <br />
              <span className="text-brand">把数据留给自己。</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              Veri Fin 是一款完全免费、无账号、无广告的 Android
              记账应用。账本保存在你的手机里，备份、导入和 AI 都由你决定。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.releases} target="_blank" rel="noreferrer" size="lg">
                <Download className="h-4 w-4" aria-hidden="true" />
                免费下载 Android 版
              </ButtonLink>
              <ButtonLink href="#features" variant="secondary" size="lg">
                看看它能做什么
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm text-muted">无需注册 · 离线记账 · 无广告</p>
          </div>

          <PhoneShowcase />
        </div>
      </Container>
    </section>
  )
}
