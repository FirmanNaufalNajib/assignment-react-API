import {Link, useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import bodyImage from "../assets/images/email-campaign-concept-illustration/bodyImage.jpg"
import "./pages.css"



const Home = () => {
  const logoutNavigate = useNavigate()
  const token = localStorage.getItem("token") 

  const logout = () => {
    localStorage.removeItem("token")
    logoutNavigate("/login")
  }
  return (
    <>
    <div className="home-container">
      <Navbar/>
      <div className="home-body">
        <div className="body-description">
          <h1 className="body-heading">Welcome, it's Personal Contact</h1>
          <p className="body-par">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.       
            </p>
          {token ? 
          (
            <button className="home-button" onClick={logout}><i className="fas fa-users"></i>Logout</button>     
          ) 
          :
          (
            <Link to={"/login"}>
            <button className="home-button">Login</button>
            </Link>
          )
          }
        </div>
      <img className="body-image" src={bodyImage}/>
      </div>
    </div>
    </>
  )
}

export default Home