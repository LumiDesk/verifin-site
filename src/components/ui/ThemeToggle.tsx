import { Check, Monitor, Moon, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { type ThemeMode, useTheme } from '../../features/theme/theme-context'
import { cn } from '../../lib/cn'

const options = [
  { value: 'system', label: '跟随系统', icon: Monitor },
  { value: 'light', label: '浅色', icon: Sun },
  { value: 'dark', label: '深色', icon: Moon },
] as const

const modeLabels: Record<ThemeMode, string> = {
  system: '跟随系统',
  light: '浅色',
  dark: '深色',
}

export function ThemeToggle() {
  const { mode, resolvedTheme, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const CurrentIcon = mode === 'system' ? Monitor : mode === 'dark' ? Moon : Sun

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`主题：${modeLabels[mode]}`}
        aria-haspopup="menu"
        aria-expanded={open}
        title={`主题：${modeLabels[mode]}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ice hover:text-ink"
      >
        <CurrentIcon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="主题设置"
          className="absolute top-full right-0 z-50 mt-2 w-40 rounded-2xl border border-line bg-surface p-1.5 shadow-soft"
        >
          {options.map((option) => {
            const Icon = option.icon
            const selected = mode === option.value

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setMode(option.value)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-ice',
                  selected ? 'bg-ice text-ink' : 'text-muted',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1">{option.label}</span>
                {selected ? <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> : null}
              </button>
            )
          })}
          <p className="px-3 pt-2 pb-1 text-[0.68rem] text-muted">
            当前：{resolvedTheme === 'dark' ? '深色' : '浅色'}
          </p>
        </div>
      ) : null}
    </div>
  )
}
