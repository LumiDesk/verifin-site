import { screenshotSrc } from '../../content/screenshots'
import { useContent } from '../../features/locale/useContent'
import { useTheme } from '../../features/theme/theme-context'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { PhoneFrame } from './PhoneFrame'

export function ScreensSection() {
  const { resolvedTheme } = useTheme()
  const content = useContent()

  return (
    <Section id="screens" tone="surface">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={content.screens.eyebrow}
          title={content.screens.title}
          description={content.screens.description}
        />

        <div className="screens-rail mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {content.screens.items.map((screen) => (
            <figure key={screen.label} className="w-[76%] shrink-0 snap-center md:w-auto">
              <PhoneFrame
                src={screenshotSrc(screen.name, resolvedTheme)}
                alt={screen.alt}
                className="mx-auto w-[210px] sm:w-[225px]"
              />
              <figcaption className="mt-5 text-center">
                <p className="text-sm font-semibold text-ink">{screen.label}</p>
                <p className="mt-1 text-xs text-muted">{screen.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
