import {urlAuth} from '../../../api/auth';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Favourites from './Favourites';
import LogOut from './LogOut';

export const Auth = ({user}) => (
  <div className={style.profile}>
    {
      user.username ?
      <>
        <img
          src={user['profile_image'].small}
          alt='Аватарка'
          className={style.image}
        />
        <p>{user.username}</p>
        <Favourites />
        <LogOut />
      </> :
      <a href={urlAuth}>
        Войти
      </a>
    }
  </div>
);

Auth.propTypes = {
  user: PropTypes.object,
};
