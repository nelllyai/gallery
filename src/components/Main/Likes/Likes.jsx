import style from './Likes.module.css';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  likesDeleteAsync,
  likesPostAsync
} from '../../../store/likes/likesAction';

export const Likes = ({id, quantity, pushed}) => {
  const token = useSelector(state => state.token.token);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLikes(quantity);
    setLiked(pushed);
  }, [quantity, pushed]);

  const handleLike = id => {
    if (!token) return;

    if (!liked) {
      dispatch(likesPostAsync(id));
      setLikes(likes => likes + 1);
    } else {
      dispatch(likesDeleteAsync(id));
      setLikes(likes => likes - 1);
    }

    setLiked(!liked);
  };

  return (
    <button
      className={`${style.likes}
      ${liked && style.pushed}`}
      onClick={() => handleLike(id)}
    >
      {likes}
    </button>
  );
};

Likes.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  pushed: PropTypes.bool,
};
