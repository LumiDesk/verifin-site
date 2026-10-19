export type ScreenshotName = 'home' | 'assets' | 'reports'
export type ScreenshotTheme = 'light' | 'dark'

export function screenshotSrc(name: ScreenshotName, theme: ScreenshotTheme) {
  return `/screenshots/${name}-${theme}.jpg`
}
