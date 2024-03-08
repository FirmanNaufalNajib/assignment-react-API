
const UsersItem = (props) => {

  return (
    <>
    <img src={props.avatar}/>
    <h4>first name: {props.first_name}</h4>
    <h4>last name: {props.last_name}</h4>
    <p>email: {props.email}</p>
    </>
  )
}

export default UsersItem