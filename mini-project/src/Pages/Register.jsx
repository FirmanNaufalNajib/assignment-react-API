import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import formImage from "../assets/images/illustrated-woman-being-intern-company/form-image.jpg"
import Navbar from "../components/Navbar"
import "./pages.css"

const Register = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [notif, setNotif] = useState("")

  const navigate = useNavigate() 

  const handleEmail = (e) => {   
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  console.log()

  const handleSubmit = () => { 
    const payload = {
      email: email, 
      password: password
    }
    axios
    .post('https://reqres.in/api/register', payload)
    .then(res => {
      console.log(res)
      setNotif('success, please wait..')
      setTimeout(() => {
        navigate("/login")
        }, 1000)       
    })
    .catch(err =>{
      console.log(err.response)
      setNotif(err?.response?.data?.error)
    })
  }



  return (
    <>
    <Navbar/>
    <div className="register-container">
      <img className="form-image" src={formImage} alt="administration" />
      <div className="form-register">
        {!!notif.length && <h3>{notif}</h3>}
        <input className="input-register-body" type="email" placeholder="Email" onChange={handleEmail}></input>
        <input className="input-register-body" type="password" placeholder="Password" onChange={handlePassword}></input>
        <button className="register-button" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
    

    </>
  )
}

export default Register