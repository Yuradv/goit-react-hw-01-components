import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
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
