import { render } from '@redwoodjs/testing'

import ShowSupportPage from './ShowSupportPage'

describe('ShowSupportPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowSupportPage />)
    }).not.toThrow()
  })
})
