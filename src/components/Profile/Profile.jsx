import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={`Avatar user's ${name}`} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        {Object.keys(stats).map(name => (
          <li key={name} className={s.statsItem}>
            <span className={s.label}>{name}</span>
            <span className={s.quantity}>
              {stats[name].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
