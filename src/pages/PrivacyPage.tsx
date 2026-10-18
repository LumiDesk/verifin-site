import { legalUpdatedAt, privacyPolicy } from '../content/legal'
import { LegalPage } from './LegalPage'

export function PrivacyPage() {
  return (
    <LegalPage title={privacyPolicy.title} updatedAt={legalUpdatedAt}>
      <div className="space-y-8">
        <p className="text-sm leading-7 text-muted">
          本页内容与 Veri Fin 应用内发布的版本一致，便于在下载前核对数据如何处理。
        </p>
        {privacyPolicy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-bold tracking-[-0.02em] text-ink">{section.heading}</h2>
            <p className="mt-3 text-sm leading-7 whitespace-pre-line text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </LegalPage>
  )
}
