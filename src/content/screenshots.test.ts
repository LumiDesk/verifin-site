/// <reference types="node" />

import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { screenshotSrc, type ScreenshotName, type ScreenshotTheme } from './screenshots'

const names: ScreenshotName[] = ['home', 'assets', 'reports']
const themes: ScreenshotTheme[] = ['light', 'dark']

describe('screenshot assets', () => {
  it.each(names.flatMap((name) => themes.map((theme) => [name, theme] as const)))(
    'has full and responsive files for %s-%s',
    (name, theme) => {
      const source = screenshotSrc(name, theme)
      const fullPath = join(process.cwd(), 'public', source)
      const smallPath = fullPath.replace(/\.jpg$/, '-sm.jpg')

      expect(existsSync(fullPath)).toBe(true)
      expect(existsSync(smallPath)).toBe(true)
      expect(statSync(fullPath).size).toBeGreaterThan(0)
      expect(statSync(smallPath).size).toBeGreaterThan(0)
    },
  )
})
