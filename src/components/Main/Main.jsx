import style from './Main.module.css';
import {Route, Routes} from 'react-router-dom';
import List from './List';
import Layout from '../Layout';
import PhotoInfo from './PhotoInfo';
import Modal from '../Modal';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/' element={<List />}>
          <Route path='favourites' element={<Modal />} />
        </Route>
        <Route path='/photos/:id' element={<PhotoInfo />} />
      </Routes>
    </Layout>
  </main>
);
