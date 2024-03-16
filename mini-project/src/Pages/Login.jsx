import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import formImage from "../assets/images/illustrated-woman-being-intern-company/form-image.jpg"

const Login = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate() 

  const handleEmail = (e) => { 
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => { 

    const payload = {
      email: email, 
      password: password
    }
    
    setLoading(true)

    axios
    .post('https://reqres.in/api/login', payload)
    .then(res => {
      console.log(res)
      const token = res?.data?.token
      localStorage.setItem("token", token)
        setLoading(false)
        setNotif('welcome..')
        setTimeout(() => {navigate("/users")}, 1000)
   
    })
    .catch(err =>{
      setLoading(false)
      console.log(err.response)
      setNotif(err?.response?.data?.error)
    })
  }

  return ( 
    <>
      <Navbar/>
      <div className="login-container">
        <img className="form-image" src={formImage} alt="administration" />

        <div className="form-login">
          {!!notif.length && <h3>{notif}</h3>}
          <input className="input-body" type="email" placeholder="Email" onChange={handleEmail}/>
          <input className="input-body" type="password" placeholder="Password" onChange={handlePassword}/>
          
          <button className="login-button" onClick={handleLogin}>{loading ? 'loading..':'Login'}</button>
          </div>

          <p>Have no account? then</p>
          <Link to="/register">      
          <h4>Sign Up</h4>
          </Link>
  
      </div>
    </>
  )
}

export default Login

