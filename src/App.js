import {getCode} from './api/code';
import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  const code = getCode();

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
