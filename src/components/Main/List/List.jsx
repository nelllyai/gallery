import style from './List.module.css';
import Photo from './Photo';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {photosRequestAsync} from '../../../store/photos/photosAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

export const List = () => {
  const token = useSelector(state => state.token.token);

  const photos = useSelector(state => state.photos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosRequestAsync({start: true}));
  }, [token]);

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={() => dispatch(photosRequestAsync({}))}
      hasMore={true}
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{320: 1, 480: 2, 768: 3, 1024: 4, 1366: 5}}
        className={style.list}
      >
        <Masonry gutter={'20px'}>
          {
            photos.map(photo => (
              <Photo key={photo.id} photoData={photo} />
            ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </InfiniteScroll>
  );
};
