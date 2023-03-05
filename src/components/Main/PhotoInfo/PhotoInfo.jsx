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
        <p>Загрузка...</p> :
        <>
          <Image
            source={photoData.urls.regular}
            description={photoData.description}
          />
          <p className={style.description}>Информация о фотографии:</p>
          <ul className={style.info}>
            <li>
              <Author
                name={photoData.user.username}
                link={photoData.user.links.html}
              />
            </li>
            <li>
              <Date date={photoData['created_at']} />
            </li>
            <li>
              <Likes quantity={photoData.likes} />
            </li>
          </ul>
        </>
      }
      <Link to='/'>
        <p className={style.link}>Вернуться в ленту</p>
      </Link>
    </div>
  );
};
