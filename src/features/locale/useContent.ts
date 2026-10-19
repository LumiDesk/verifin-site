import { getContent } from '../../content'
import { useLocale } from './locale-context'

export function useContent() {
  const { locale } = useLocale()
  return getContent(locale)
}
