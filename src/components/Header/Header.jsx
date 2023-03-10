import style from './Header.module.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestAsync} from '../../store/auth/authAction';
import {tokenRequestAsync} from '../../store/token/tokenAction';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';

export const Header = ({code}) => {
  const token = useSelector(state => state.token.token);
  const userData = useSelector(state => state.auth.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      dispatch(tokenRequestAsync(code));
      navigate('/');
    }
  }, [code]);

  useEffect(() => {
    if (token) {
      dispatch(authRequestAsync());
    }
  }, [token]);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <Search />
        <Auth user={userData} />
      </div>
    </header>
  );
};

Header.propTypes = {
  code: PropTypes.string,
};
