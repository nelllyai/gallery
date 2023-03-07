import style from './PhotoInfo.module.css';
import Image from '../Image';
import Author from '../Author';
import Date from '../Date';
import Likes from '../Likes';
import {Link, useParams} from 'react-router-dom';
import {photoRequestAsync} from '../../../store/photo/photoAction';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {ClipLoader} from 'react-spinners';

export const PhotoInfo = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.photo.loading);
  const photoData = useSelector(state => state.photo.data);

  const {
    user,
    description,
    urls,
    likes,
    created_at: date,
    liked_by_user: liked,
  } = photoData;

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [id]);

  return (
    <div className={style.full}>
      {
        loading || !user ?
        <ClipLoader
          color={'#fff'}
          size={250}
        /> :
        <>
          <Image
            source={urls.regular}
            description={description}
          />
          <div className={style.info}>
            <p className={style.description}>Информация о фотографии:</p>
            <Author
              name={user.username}
              link={user.links.html}
            />
            <Date date={date} />
            <Likes
              id={id}
              quantity={likes}
              pushed={liked}
            />
          </div>
        </>
      }
      <Link to='/'>
        <p className={style.link}>Вернуться в ленту</p>
      </Link>
    </div>
  );
};
