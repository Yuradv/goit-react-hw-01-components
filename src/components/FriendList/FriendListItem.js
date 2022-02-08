import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, id, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
