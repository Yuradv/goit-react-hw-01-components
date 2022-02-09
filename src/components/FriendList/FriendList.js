import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;
