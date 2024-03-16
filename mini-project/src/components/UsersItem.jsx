
const UsersItem = (props) => {

  return (
    <>
    <div className="item-container">
      <img src={props.avatar}/>
      <h4>{props.first_name} {props.last_name}</h4>
      <p>{props.email}</p>   
    </div>
    </>
  )
}

export default UsersItem