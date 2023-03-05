import style from './Image.module.css';
import PropTypes from 'prop-types';

export const Image = ({source, description}) => (
  <img src={source} alt={description} className={style.img} />
);

Image.propTypes = {
  source: PropTypes.string,
  description: PropTypes.string,
};
