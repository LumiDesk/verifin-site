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

export function HomePage() {
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
