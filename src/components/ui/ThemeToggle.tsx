import { Monitor, Moon, Sun } from 'lucide-react'
import { useContent } from '../../features/locale/useContent'
import { type ThemeMode, useTheme } from '../../features/theme/theme-context'
import { MenuPopover } from './MenuPopover'

export function ThemeToggle() {
  const { mode, resolvedTheme, setMode } = useTheme()
  const content = useContent()
  const CurrentIcon = mode === 'system' ? Monitor : mode === 'dark' ? Moon : Sun
  const currentLabel = mode === 'system' ? content.theme.system : content.theme[mode]

  return (
    <MenuPopover
      menuLabel={content.theme.settings}
      triggerLabel={`${content.theme.label}: ${currentLabel}`}
      triggerIcon={CurrentIcon}
      value={mode}
      options={[
        { value: 'system', label: content.theme.system, icon: Monitor },
        { value: 'light', label: content.theme.light, icon: Sun },
        { value: 'dark', label: content.theme.dark, icon: Moon },
      ]}
      onSelect={(value) => setMode(value as ThemeMode)}
      footer={`${content.theme.current}: ${
        resolvedTheme === 'dark' ? content.theme.dark : content.theme.light
      }`}
    />
  )
}
