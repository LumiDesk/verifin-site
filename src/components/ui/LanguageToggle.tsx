import { Languages } from 'lucide-react'
import { useContent } from '../../features/locale/useContent'
import { useLocale } from '../../features/locale/locale-context'
import { isLocale, localeNames, locales } from '../../i18n/routing'
import { MenuPopover } from './MenuPopover'

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()
  const content = useContent()

  return (
    <MenuPopover
      menuLabel={content.language.settings}
      triggerLabel={`${content.language.label}: ${localeNames[locale]}`}
      triggerIcon={Languages}
      value={locale}
      options={locales.map((localeOption) => ({
        value: localeOption,
        label: localeNames[localeOption],
        icon: Languages,
      }))}
      footer={`${content.language.label}: ${localeNames[locale]}`}
      onSelect={(value) => {
        if (isLocale(value)) setLocale(value)
      }}
    />
  )
}
