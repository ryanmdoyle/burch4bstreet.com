import { render } from '@redwoodjs/testing'

import LettersPage from './LettersPage'

describe('LettersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LettersPage />)
    }).not.toThrow()
  })
})
