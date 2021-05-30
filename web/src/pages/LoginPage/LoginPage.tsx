import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { logIn, logOut } = useAuth()
  return (
    <div className="flex justify-center items-center w-full h-full">
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default LoginPage
