import { Check, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

interface MenuOption {
  value: string
  label: string
  icon: LucideIcon
}

interface MenuPopoverProps {
  menuLabel: string
  triggerLabel: string
  triggerIcon: LucideIcon
  value: string
  options: MenuOption[]
  onSelect: (value: string) => void
  footer?: string
}

export function MenuPopover({
  menuLabel,
  triggerLabel,
  triggerIcon: TriggerIcon,
  value,
  options,
  onSelect,
  footer,
}: MenuPopoverProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  )

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }))
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    const frame = requestAnimationFrame(() => {
      const items = menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]')
      items?.[selectedIndex]?.focus({ preventScroll: true })
    })

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, selectedIndex])

  const focusItem = (offset: number) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [],
    )
    if (items.length === 0) return
    const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement)
    const nextIndex = (currentIndex + offset + items.length) % items.length
    items[nextIndex]?.focus()
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={triggerLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        title={triggerLabel}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-ice hover:text-ink"
      >
        <TriggerIcon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
      </button>

      {open ? (
        <div
          ref={menuRef}
          role="menu"
          aria-label={menuLabel}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault()
              focusItem(1)
            } else if (event.key === 'ArrowUp') {
              event.preventDefault()
              focusItem(-1)
            } else if (event.key === 'Home') {
              event.preventDefault()
              menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitemradio"]')?.focus()
            } else if (event.key === 'End') {
              event.preventDefault()
              const items =
                menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]')
              items?.[items.length - 1]?.focus()
            }
          }}
          onBlur={(event) => {
            if (!containerRef.current?.contains(event.relatedTarget as Node)) {
              setOpen(false)
            }
          }}
          className="menu-pop absolute top-full right-0 z-50 mt-2 w-48 rounded-2xl border border-line bg-surface p-1.5 shadow-soft"
        >
          {options.map((option) => {
            const Icon = option.icon
            const selected = option.value === value

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                tabIndex={-1}
                onClick={() => {
                  onSelect(option.value)
                  setOpen(false)
                  requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }))
                }}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-ice focus-visible:bg-ice',
                  selected ? 'bg-ice text-ink' : 'text-muted',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1">{option.label}</span>
                {selected ? <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> : null}
              </button>
            )
          })}
          {footer ? <p className="px-3 pt-2 pb-1 text-[0.68rem] text-muted">{footer}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
