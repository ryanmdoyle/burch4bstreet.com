import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const LoginPage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <div className="flex justify-center items-center w-full h-96">
      <div className="flex justify-center flex-col">
        <button
          className="h-8 w-36 bg-green-400 rounded-md text-white mb-4"
          onClick={logIn}
        >
          Log In
        </button>
        <button
          className="h-8 w-36 bg-red-400 rounded-md text-white mb-8"
          onClick={logOut}
        >
          Log Out
        </button>
        {isAuthenticated && (
          <Link to={routes.messages()}>
            <button className="h-8 w-36 bg-purple-400 rounded-md text-white mb-8">
              See all messages
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default LoginPage
