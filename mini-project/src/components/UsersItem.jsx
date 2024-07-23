import PropTypes from 'prop-types';
import "./components.css";

const UsersItem = (props) => {
  return (
    <div className="item-container">
      <img src={props.avatar} alt={`${props.first_name} ${props.last_name}`} />
      <h4>{props.first_name} {props.last_name}</h4>
      <p>{props.email}</p>
    </div>
  );
}

UsersItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UsersItem;
