import { Link, routes } from '@redwoodjs/router'

const ShowSupportPage = () => {
  return (
    <>
      <h1>ShowSupportPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ShowSupportPage/ShowSupportPage.tsx</code>
      </p>
      <p>
        My default route is named <code>showSupport</code>, link to me with `
        <Link to={routes.showSupport()}>ShowSupport</Link>`
      </p>
    </>
  )
}

export default ShowSupportPage
