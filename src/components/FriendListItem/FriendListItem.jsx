import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={s[`${isOnline}`]}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`Avatar user's ${name}`}
        width={110}
      />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
