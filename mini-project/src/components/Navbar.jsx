import { Link } from "react-router-dom"

const Navbar = () => {

  return (
  <>
    <Link to="/"><h3>Home</h3></Link>
    <Link to="/users"><h3>Users</h3></Link>  
  </>
  )
}

export default Navbar