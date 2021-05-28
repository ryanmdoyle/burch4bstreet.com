import { render } from '@redwoodjs/testing'

import ComingSoonPage from './ComingSoonPage'

describe('ComingSoonPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ComingSoonPage />)
    }).not.toThrow()
  })
})
