import classes from './Icon.module.css';
import svg from '../../assets/svg/sprite.svg';

export const IconPlus = ({ style }) => {
  return (
    <svg className={`${style} ${classes.iconSecondary}`}>
      <use href={`${svg}#icon-plus`}></use>
    </svg>
  );
};

export const IconCalendar = ({ style }) => {
  return (
    <svg className={`${style} ${classes.iconNeutral}`}>
      <use href={`${svg}#icon-calendar`}></use>
    </svg>
  );
};

export const IconLocation = ({ style }) => {
  return (
    <svg className={`${style} ${classes.iconNeutral}`}>
      <use href={`${svg}#icon-location-pin`}></use>
    </svg>
  );
};
