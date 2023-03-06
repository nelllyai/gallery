// import style from './List.module.css';
import Photo from './Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {photosRequestAsync} from '../../../store/photos/photosAction';
import {Masonry} from '@mui/lab';

export const List = () => {
  const token = useSelector(state => state.token.token);

  const photos = useSelector(state => state.photos.data);
  const dispatch = useDispatch();

  const endList = useRef(null);

  useEffect(() => {
    dispatch(photosRequestAsync(1));
  }, [token]);

  useEffect(() => {
    if (!endList.current) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('observe');
        // dispatch(photosRequestAsync());
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
    <>
      <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={1}>
        {
          photos.map(photo => (
            <Photo key={photo.id} photoData={photo} />
          ))
        }
      </Masonry>
      <div ref={endList} />
    </>
  );
};
