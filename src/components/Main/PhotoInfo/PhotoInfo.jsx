import style from './PhotoInfo.module.css';
import Image from '../Image';
import Author from '../Author';
import Date from '../Date';
import Likes from '../Likes';
import {Link, useParams} from 'react-router-dom';
import {photoRequestAsync} from '../../../store/photo/photoAction';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

export const PhotoInfo = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const photoData = useSelector(state => state.photo.data);

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [id]);

  return (
    <div className={style.full}>
      {
        !photoData.user ?
        <p className={style.loading}>Загрузка...</p> :
        <>
          <Image
            source={photoData.urls.regular}
            description={photoData.description}
          />
          <div className={style.info}>
            <p className={style.description}>Информация о фотографии:</p>
            <Author
              name={photoData.user.username}
              link={photoData.user.links.html}
            />
            <Date date={photoData['created_at']} />
            <Likes
              id={id}
              quantity={photoData.likes}
              pushed={photoData['liked_by_user']}
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
