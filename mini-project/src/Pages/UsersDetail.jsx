import axios from "axios"
import { useState, useEffect } from "react"
import UsersItem from "../components/UsersItem"
import {useParams} from 'react-router-dom'
import Navbar from "../components/Navbar"

const UsersDetail = () => {
  const [usersDetailData, setUsersDetailData] = useState({})
  const {id} = useParams()

  const getUsersDetailData = () => {
    axios.get(`https://reqres.in/api/users/${id}`)
    .then(res => setUsersDetailData(res.data.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsersDetailData()
  }, [])

  return (
    <>
      <Navbar/>
      <UsersItem 
      first_name={usersDetailData.first_name} 
      last_name={usersDetailData.last_name} 
      avatar={usersDetailData.avatar} 
      email={usersDetailData.email}
      />
    </>
  )
}

export default UsersDetail