import {getCode} from './api/code';
import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom';
import {getToken} from './utils/tokenStorage';
import {useDispatch} from 'react-redux';
import {tokenSlice} from './store/token/tokenSlice';

const App = () => {
  const code = getCode();

  const dispatch = useDispatch();
  const token = getToken();
  if (token) {
    dispatch(tokenSlice.actions.tokenSet({token}));
  }

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header code={code} />
          <Main />
        </>
      } />
    </Routes>
  );
};

export default App;
