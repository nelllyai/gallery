import {useDispatch} from 'react-redux';
import {authSlice} from '../../../../store/auth/authSlice';
import {tokenSlice} from '../../../../store/token/tokenSlice';
import style from './LogOut.module.css';

export const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={style.logout}
      onClick={() => {
        dispatch(tokenSlice.actions.tokenDelete());
        dispatch(authSlice.actions.clearAuth());
      }}>
      Выйти
    </button>
  );
};
