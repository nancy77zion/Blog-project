import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>Header
      <Link to="/" className="self-center whitespace-nowrap 
      text-sm sm:text-xl font-semibold dark:text-white" >
        <span className="px-2" >Ebby</span>
        Blog
      </Link>
    </div>
  )
}

export default Header