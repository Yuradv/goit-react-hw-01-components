import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, id, isOnline }) {
  return (
    <li className={s.item}>
      <span className="status">
        {isOnline ? (
          <span className={s.online} />
        ) : (
          <span className={s.offline} />
        )}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
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
