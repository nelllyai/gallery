import style from './Date.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';

export const Date = ({date}) => (
  <time dateTime={date} className={style.date}>
    {formatDate(date)}
  </time>
);

Date.propTypes = {
  date: PropTypes.string,
};
