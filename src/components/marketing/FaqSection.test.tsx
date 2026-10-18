import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FaqSection } from './FaqSection'

describe('FaqSection', () => {
  it('renders the FAQ heading and questions', () => {
    render(<FaqSection />)

    expect(screen.getByRole('heading', { name: '下载前，你可能想知道。' })).toBeInTheDocument()
    expect(screen.getByText('真的完全免费吗？')).toBeInTheDocument()
    expect(screen.getByText('数据会被上传吗？')).toBeInTheDocument()
  })
})
