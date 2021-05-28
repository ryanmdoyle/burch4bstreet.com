import { render } from '@redwoodjs/testing'

import SupportButton from './SupportButton'

describe('SupportButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupportButton />)
    }).not.toThrow()
  })
})
