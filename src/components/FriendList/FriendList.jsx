
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendListItem.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friendAvatar={friend.avatar}
          friendName={friend.name}
          friendIsOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};



