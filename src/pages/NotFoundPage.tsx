import { Link, useLocation } from 'react-router-dom'
import { buttonStyles } from '../components/ui/button-styles'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../content/site'
import { useContent } from '../features/locale/useContent'
import { useLocale } from '../features/locale/locale-context'
import { homePath } from '../i18n/routing'
import { usePageMeta } from '../lib/usePageMeta'

export function NotFoundPage() {
  const { pathname } = useLocation()
  const { locale } = useLocale()
  const content = useContent()
  usePageMeta({ ...content.meta.notFound, path: pathname })

  return (
    <Section className="flex min-h-[68vh] items-center">
      <Container className="text-center">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          {content.notFound.title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-muted">
          {content.notFound.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={homePath(locale)} className={buttonStyles()}>
            {content.notFound.home}
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={buttonStyles({ variant: 'secondary' })}
          >
            {content.notFound.github}
          </a>
        </div>
      </Container>
    </Section>
  )
}
