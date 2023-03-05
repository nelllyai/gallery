// import style from './List.module.css';
import Photo from './Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {photosRequestAsync} from '../../../store/photos/photosAction';
import {Masonry} from '@mui/lab';

export const List = () => {
  const photos = useSelector(state => state.photos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, []);

  return (
    <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={1}>
      {
        photos.map(photo => (
          <Photo key={photo.id} photoData={photo} />
        ))
      }
    </Masonry>
  );
};
