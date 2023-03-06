import style from './Likes.module.css';
import PropTypes from 'prop-types';
// import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line max-len
// import {likeDeleteAsync, likePostAsync} from '../../../store/like/likeAction';
// import {useEffect, useState} from 'react';

export const Likes = ({id, quantity, pushed}) => {
  // const token = useSelector(state => state.token.token);

  // const loading = useSelector(state => state.like.loading);
  // const dispatch = useDispatch();

  // const [liked] = useState(pushed);
  // const [likes] = useState(quantity);

  const handleLike = id => {
    console.log('click');
    // if (!token) return;

    // if (liked) {
    //   dispatch(likeDeleteAsync(id));
    // } else {
    //   dispatch(likePostAsync(id));
    // }
  };

  // useEffect(() => {
  //   if (!loading) {
  //     setLiked(useSelector(state => state.like.liked));
  //     setLikes(useSelector(state => state.like.likes));
  //   }
  // }, [loading]);

  return (
    <button
      className={`${style.likes} ${pushed && style.pushed}`}
      onClick={() => handleLike(id)}
    >
      {quantity}
    </button>
  );
};

Likes.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  pushed: PropTypes.bool,
};
