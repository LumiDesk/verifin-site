import { DashboardSection } from '../components/marketing/DashboardSection'
import { DownloadSection } from '../components/marketing/DownloadSection'
import { FaqSection } from '../components/marketing/FaqSection'
import { Hero } from '../components/marketing/Hero'
import { ImportSection } from '../components/marketing/ImportSection'
import { OpenSourceSection } from '../components/marketing/OpenSourceSection'
import { PrivacySection } from '../components/marketing/PrivacySection'
import { QuickFeaturesSection } from '../components/marketing/QuickFeaturesSection'
import { ScreensSection } from '../components/marketing/ScreensSection'
import { TrustStrip } from '../components/marketing/TrustStrip'
import { useContent } from '../features/locale/useContent'
import { useLocale } from '../features/locale/locale-context'
import { homePath } from '../i18n/routing'
import { usePageMeta } from '../lib/usePageMeta'

export function HomePage() {
  const { locale } = useLocale()
  const content = useContent()
  usePageMeta({ ...content.meta.home, path: homePath(locale) })

  return (
    <>
      <Hero />
      <TrustStrip />
      <QuickFeaturesSection />
      <DashboardSection />
      <PrivacySection />
      <ImportSection />
      <ScreensSection />
      <OpenSourceSection />
      <FaqSection />
      <DownloadSection />
    </>
  )
}
