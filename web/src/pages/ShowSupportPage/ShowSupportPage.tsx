import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import NewMessage from 'src/components/NewMessage/NewMessage'
import CircleArrowLeft from 'src/components/CircleArrowLeft/CircleArrowLeft'

const ShowSupportPage = () => {
  const [message, setMessage] = useState(null)

  return (
    <>
      <Link to={routes.home()}>
        <span className="text-sofiaGreen hover:text-sofiaGreenDark flex justify-center items-center">
          <CircleArrowLeft /> Go Back
        </span>
      </Link>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-sofiaGreen font-display my-4 text-center">
        Send a message of support to the B Street Board of Directors
      </h2>
      <p className="font-body text-center">
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
      {message === 'none' && <NewMessage subject={'no help'} message={''} />}
      {message === 'help' && (
        <NewMessage
          subject={'some help'}
          message={'a message with fill in the blanks'}
        />
      )}
      {message === 'complete' && (
        <NewMessage
          subject={'complete'}
          message={'A totally complete message'}
        />
      )}
    </>
  )
}

export default ShowSupportPage
