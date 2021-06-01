import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { Helmet } from 'react-helmet'
import NewMessage from 'src/components/NewMessage/NewMessage'
import CircleArrowLeft from 'src/components/CircleArrowLeft/CircleArrowLeft'

const ShowSupportPage = () => {
  const [message, setMessage] = useState(null) //none, help, complete

  const subject = 'In support of Lyndsay Burch for Artistic Director'

  const completedText = `To Whom it May Concern,

It has come to my attention that the B Street Theatre Board of Directors is beginning a search for the company’s next Artistic Director, and I am writing to you to express my support for Lyndsay Burch. While Buck Busfield’s departure will leave big shoes for anyone to fill, I have no doubt that Ms. Burch is the best candidate for the job, and I strongly encourage you to select her.

Ms. Burch brings to B Street a national and international professional profile that is well-known and respected in this industry, strong leadership skills, and an innovative approach to modern issues faced by theatre companies of all sizes. She is incredibly passionate about this company and has a strong vision for this future, in addition to being already familiar with the unique Acting Company structure, the educational mission, and the high-quality of work for which B Street is known nationally.

I wish you the best in your search, however, in my opinion, your next Artistic Director is already in your building.
`

  const partialText = `To Whom it May Concern,

It has come to my attention that the B Street Theatre Board of Directors is beginning a search for the company’s next Artistic Director, and I am writing to you to express my support for Lyndsay Burch. While Buck Busfield’s departure will leave big shoes for anyone to fill, I have no doubt that Ms. Burch is the best candidate for the job, and I strongly encourage you to select her.

[INSERT HERE Why do you think Lyndsay is the best choice for B Street? Prompt ideas: share a time you worked with Lyndsay on a production or project; a time you’ve seen her display strong leadership; a difference she’s made in your career.]

I wish you the best in your search, however, in my opinion, your next Artistic Director is already in your building.
`

  return (
    <>
      <Helmet>
        <title>Lyndsay Burch for B Street - Show Support</title>
        <meta
          name="description"
          content="Show support for Lyndsay by sending the B Street board of directors an email."
        />
        <meta property="og:image" content="/lyndsay.jpeg" />
      </Helmet>
      <Link to={routes.home()}>
        <span className="text-sofiaGreen hover:text-sofiaGreenDark flex justify-center items-center">
          <CircleArrowLeft /> Go Back
        </span>
      </Link>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-sofiaGreen font-display my-4 text-center">
        Send a message of support to the B Street Board of Directors
      </h2>
      <p className="font-body text-center text-gray-800">
        Select an option below to get started.
      </p>
      <div className="w-full flex justify-center items-center my-8">
        <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 h-32 md:h-12 flex flex-col md:flex-row justify-between items-center text-white">
          <button
            className="bg-sofiaGreen hover:bg-sofiaGreenDark h-8 rounded-md px-4 lg:px-6 py-2 lg:py-4 flex justify-center items-center"
            onClick={() => {
              setMessage('none')
            }}
          >
            I&apos;ll write it myself
          </button>
          <button
            className="bg-sofiaGreen hover:bg-sofiaGreenDark h-8 rounded-md px-4 lg:px-6 py-2 lg:py-4 flex justify-center items-center"
            onClick={() => {
              setMessage('help')
            }}
          >
            A little help please
          </button>
          <button
            className="bg-sofiaGreen hover:bg-sofiaGreenDark h-8 rounded-md px-4 lg:px-6 py-2 lg:py-4 flex justify-center items-center"
            onClick={() => {
              setMessage('complete')
            }}
          >
            Write it for me!
          </button>
        </div>
      </div>
      {message === 'none' && <NewMessage subject={subject} message={''} />}
      {message === 'help' && (
        <NewMessage subject={subject} message={partialText} />
      )}
      {message === 'complete' && (
        <NewMessage subject={subject} message={completedText} />
      )}
    </>
  )
}

export default ShowSupportPage
