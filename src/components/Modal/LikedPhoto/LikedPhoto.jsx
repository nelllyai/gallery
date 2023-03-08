import style from './LikedPhoto.module.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const LikedPhoto = ({photoData}) => {
  const {
    id,
    urls,
    description,
  } = photoData;

  return (
    <div className={style.photo}>
      <Link
        to={`/photos/${id}`}
        className={style.image}
      >
        <img
          src={urls.small}
          alt={description}
        />
      </Link>
    </div>
  );
};

LikedPhoto.propTypes = {
  photoData: PropTypes.object,
};
