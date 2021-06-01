import { Helmet } from 'react-helmet'

const ComingSoonPage = () => {
  return (
    <>
      <Helmet>
        <title>Lyndsay Burch for B Street - Coming Soon</title>
        <meta name="description" content="Coming Soon!" />
        <meta property="og:image" content="/lyndsay.jpeg" />
      </Helmet>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-3xl font-display text-sofiaGreen">Coming Soon!</h1>
      </div>
    </>
  )
}

export default ComingSoonPage
