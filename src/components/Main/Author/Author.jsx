import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({name, link}) => (
  <p className={style.author}>
    <a href={link} target='_blank' rel="noreferrer">{name}</a>
  </p>
);

Author.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};
