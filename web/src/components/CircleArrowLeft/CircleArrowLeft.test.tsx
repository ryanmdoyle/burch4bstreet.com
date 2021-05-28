import { render } from '@redwoodjs/testing'

import CircleArrowLeft from './CircleArrowLeft'

describe('CircleArrowLeft', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CircleArrowLeft />)
    }).not.toThrow()
  })
})
