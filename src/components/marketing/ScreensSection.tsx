import { screenshots } from '../../content/home'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { PhoneFrame } from './PhoneFrame'

export function ScreensSection() {
  return (
    <Section id="screens" tone="surface">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="界面"
          title="真实界面，不靠想象。"
          description="深色主题下的首页、资产与看板，都是应用里实际使用的工作区。"
        />

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {screenshots.map((screen) => (
            <figure key={screen.label} className="w-[76%] shrink-0 snap-center md:w-auto">
              <PhoneFrame
                src={screen.src}
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
