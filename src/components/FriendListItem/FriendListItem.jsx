import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({
  friendAvatar,
  friendName,
  friendIsOnline,
}) => {
  return (
    <li className={css.item}>
    
      <span
        className={css.status}
        style={{ backgroundColor: friendIsOnline ? 'green' : 'red' }}
      ></span>
      <img
        style={{ backgroundColor: friendIsOnline ? 'green' : 'red' }}
        className={css.avatar}
        src={friendAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friendName}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  friendIsOnline: PropTypes.bool.isRequired,
  friendAvatar: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
};
