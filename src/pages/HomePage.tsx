import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export function HomePage() {
  return (
    <Section className="pt-20 sm:pt-24 lg:pt-32">
      <Container>
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">VERI FIN · ANDROID</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-balance sm:text-5xl">
          Veri Fin 官网
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          页面骨架、设计令牌、响应式导航和路由已经就位。首屏与产品内容将按里程碑逐步接入。
        </p>
      </Container>
    </Section>
  )
}
