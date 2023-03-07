import style from './List.module.css';
import Photo from './Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {photosRequestAsync} from '../../../store/photos/photosAction';
// import {Masonry} from '@mui/lab';
import {useLocation} from 'react-router-dom';

export const List = () => {
  const token = useSelector(state => state.token.token);
  const location = useLocation();

  const photos = useSelector(state => state.photos.data);
  const loading = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();

  const endList = useRef(null);

  useEffect(() => {
    dispatch(photosRequestAsync(true));
  }, [token]);

  useEffect(() => {
    dispatch(photosRequestAsync(true));
  }, [location]);

  useEffect(() => {
    if (!endList.current || !photos.length || loading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('!');
        dispatch(photosRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    !loading &&
    <>
      <ul className={style.list}>
        {
          photos.map(photo => (
            <Photo key={photo.id} photoData={photo} />
          ))
        }
      </ul>
      {/* <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={1}>
        {
          photos.map(photo => (
            <Photo key={photo.id} photoData={photo} />
          ))
        }
      </Masonry> */}
      <div ref={endList} className={style.end} />
    </>
  );
};
