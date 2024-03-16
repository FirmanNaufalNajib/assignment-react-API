import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./components.css"

const Navbar = () => {
  const backNavigate = useNavigate()

  return (
    <>
    <div className="navbar">
      
    <Link to="/" className="navbar-link">
    <h3 >Home</h3>
    </Link>
    <Link to="/users" className="navbar-link">
    <h3 >Users</h3>
    </Link>
    <button className="page-button" onClick={() => backNavigate(-1)}>BACK</button>
    </div>    
    </>
  )
}

export default Navbar