import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../content/site'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('页面不存在 · Veri Fin')

  return (
    <Section className="flex min-h-[68vh] items-center">
      <Container className="text-center">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          这一页不记账。
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-muted">
          你访问的页面不存在。可以回到首页继续了解 Veri Fin，或直接前往 GitHub 查看项目。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">返回首页</ButtonLink>
          <ButtonLink href={site.github} target="_blank" rel="noreferrer" variant="secondary">
            查看 GitHub
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
