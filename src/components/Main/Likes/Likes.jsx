import style from './Likes.module.css';
import PropTypes from 'prop-types';

export const Likes = ({quantity, pushed = false}) => (
  <button className={`${style.likes} ${pushed && style.pushed}`}>
    {quantity}
  </button>
);

Likes.propTypes = {
  quantity: PropTypes.number,
  pushed: PropTypes.bool,
};
