import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Image from '../../Image';
import Author from '../../Author';
import Date from '../../Date';
import Likes from '../../Likes';
import {Link} from 'react-router-dom';

export const Photo = ({photoData}) => {
  const {
    id,
    urls,
    description,
    user: {
      username,
      links: {
        html,
      }
    },
    created_at: date,
    likes,
    liked_by_user: liked,
  } = photoData;

  return (
    <div className={style.photo}>
      <Link
        to={`/photos/${id}`}
        style={{width: `100%`}}
        className={style.image}
      >
        <Image
          source={urls.thumb}
          description={description}
        />
      </Link>
      <div className={style.info}>
        <Author name={username} link={html} />
        <Date date={date} />
        <Likes id={id} quantity={likes} pushed={liked} />
      </div>
    </div>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
