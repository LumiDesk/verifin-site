import { Check } from 'lucide-react'
import { dashboardPoints } from '../../content/home'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { PhoneFrame } from './PhoneFrame'

export function DashboardSection() {
  return (
    <Section id="dashboard" tone="night" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_35%,rgb(73_177_245_/_0.16),transparent_72%),radial-gradient(42%_42%_at_12%_80%,rgb(0_196_182_/_0.08),transparent_72%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="预算与资产"
              title="钱去了哪里，一眼看清。"
              description="从今天的开销到一整年的趋势，从预算执行到信用账户，都在同一套清楚的视图里。"
              inverted
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {dashboardPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/10 text-mint">
                    <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-6 text-white/70">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(73_177_245_/_0.18),transparent_68%)]"
            />
            <PhoneFrame
              src="/screenshots/reports.jpg"
              alt="Veri Fin 看板页：本月收支、预算与分类排行"
              className="relative z-10 mx-auto w-[250px] ring-1 ring-white/10 sm:w-[280px]"
            />

            <div className="absolute top-16 -left-2 z-20 hidden rounded-2xl border border-white/10 bg-night-card/95 px-4 py-3 shadow-phone sm:block">
              <p className="text-[0.68rem] font-medium text-white/55">本月结余</p>
              <p className="mt-1 text-lg font-bold text-income">+9,003.20</p>
            </div>

            <div className="absolute bottom-24 -left-3 z-20 hidden w-[172px] rounded-2xl border border-white/10 bg-night-card/95 px-4 py-3 shadow-phone sm:block">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.68rem] font-medium text-white/55">预算已用</p>
                <p className="text-xs font-semibold text-expense">130%</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-expense" />
              </div>
            </div>

            <div className="absolute right-6 bottom-10 z-20 hidden rounded-2xl border border-white/10 bg-night-card/95 px-4 py-3 shadow-phone sm:block">
              <p className="text-[0.68rem] font-medium text-white/55">净资产</p>
              <p className="mt-1 text-lg font-bold text-white">57,930.60</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
