import style from './Likes.module.css';
import PropTypes from 'prop-types';

export const Likes = ({id, quantity, pushed}) => (
  <button className={`${style.likes} ${pushed && style.pushed}`}>
    {quantity}
  </button>
);

Likes.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  pushed: PropTypes.bool,
};
