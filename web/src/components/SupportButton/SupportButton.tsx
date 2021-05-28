import { Link, routes } from '@redwoodjs/router'

const SupportButton: React.FunctionComponent = () => {
  return (
    <Link to={routes.showSupport()}>
      <button className="bg-sofiaGreen w-64 h-12 rounded-md text-white hover:bg-sofiaGreenDark">
        Show Your Support!
      </button>
    </Link>
  )
}

export default SupportButton
