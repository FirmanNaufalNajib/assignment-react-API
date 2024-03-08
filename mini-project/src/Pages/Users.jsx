import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import UsersItem from "../components/UsersItem"
import axios from "axios"
import { Link } from "react-router-dom"

const Users = () => {
  const [usersData, setUsersData] = useState([])

  const getUserData = () => {
    axios
    .get('https://reqres.in/api/users?page=2')
    .then(res => setUsersData(res.data.data))
    .catch(err => console.log(err) )
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Navbar/>
        <h1>akan berisikan daftar users</h1>
        {usersData.map((item) =>
        (
        <div>
          <UsersItem 
            first_name={item.first_name} 
            last_name={item.last_name} 
            email={item.email} 
            avatar={item.avatar}
          />
          <Link to={`/users/${item.id}`}>
            <button>Detail</button>
          </Link>
        </div>
        )
        )}
    </>    
  )
}

export default Users