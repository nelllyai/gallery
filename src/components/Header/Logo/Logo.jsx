import style from './Logo.module.css';
import logo from './img/logo.png';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {photosRequestAsync} from '../../../store/photos/photosAction';

export const Logo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    dispatch(photosRequestAsync({start: true, search: ''}));
  };

  return (
    <button className={style.link} onClick={handleClick}>
      <img className={style.logo} src={logo} alt='Логотип' />
    </button>
  );
};
