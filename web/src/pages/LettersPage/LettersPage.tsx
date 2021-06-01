import { Link, routes } from '@redwoodjs/router'

import MessagesPublicCell from 'src/components/MessagesPublicCell'

const LettersPage = () => {
  return (
    <>
      <h1 className="text-2xl font-display text-sofiaGreen text-center mb-8">
        Letters of Support
      </h1>
      <MessagesPublicCell />
    </>
  )
}

export default LettersPage
