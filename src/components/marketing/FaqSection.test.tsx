import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { LocaleProvider } from '../../features/locale/LocaleProvider'
import { FaqSection } from './FaqSection'

function renderFaq(path = '/') {
  render(
    <MemoryRouter initialEntries={[path]}>
      <LocaleProvider>
        <FaqSection />
      </LocaleProvider>
    </MemoryRouter>,
  )
}

describe('FaqSection', () => {
  it('renders the Chinese FAQ', () => {
    renderFaq()

    expect(screen.getByRole('heading', { name: '下载前，你可能想知道。' })).toBeInTheDocument()
    expect(screen.getByText('真的完全免费吗？')).toBeInTheDocument()
    expect(screen.getByText('数据会被上传吗？')).toBeInTheDocument()
  })

  it('renders the English FAQ on the /en route', () => {
    renderFaq('/en')

    expect(
      screen.getByRole('heading', { name: 'A few things to know before downloading.' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Is it really completely free?')).toBeInTheDocument()
  })

  it('renders the Japanese FAQ on the /ja route', () => {
    renderFaq('/ja')

    expect(
      screen.getByRole('heading', { name: 'ダウンロード前に知っておきたいこと。' }),
    ).toBeInTheDocument()
    expect(screen.getByText('本当に完全無料ですか？')).toBeInTheDocument()
  })
})
