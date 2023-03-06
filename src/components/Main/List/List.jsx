// import style from './List.module.css';
import Photo from './Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {photosRequestAsync} from '../../../store/photos/photosAction';
import {Masonry} from '@mui/lab';

export const List = () => {
  const endList = useRef(null);
  const photos = useSelector(state => state.photos.data);
  const loading = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!endList.current) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
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
    <>
      {
        !loading && photos.length &&
        <>
          <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={1}>
            {
              photos.map(photo => (
                <Photo key={photo.id} photoData={photo} />
              ))
            }
          </Masonry>
        </>
      }
      <div ref={endList} />
    </>
  );
};
