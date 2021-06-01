import { Helmet } from 'react-helmet'

import MessagesPublicCell from 'src/components/MessagesPublicCell'

const LettersPage = () => {
  return (
    <>
      <Helmet>
        <title>Lyndsay Burch for B Street - Letters</title>
        <meta
          name="description"
          content="View letters of support for Lyndsay."
        />
        <meta property="og:image" content="/lyndsay.jpeg" />
      </Helmet>
      <h1 className="text-2xl font-display text-sofiaGreen text-center mb-8">
        Letters of Support
      </h1>
      <MessagesPublicCell />
    </>
  )
}

export default LettersPage
