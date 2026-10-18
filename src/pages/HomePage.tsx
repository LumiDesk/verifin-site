import { Hero } from '../components/marketing/Hero'
import { TrustStrip } from '../components/marketing/TrustStrip'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <Section id="features" tone="surface" className="py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand">功能</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">
            把记账变成一件顺手的事
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted">
            功能区块正在接入，接下来会依次展示快速记账、预算看板、资产与隐私能力。
          </p>
        </Container>
      </Section>
    </>
  )
}
