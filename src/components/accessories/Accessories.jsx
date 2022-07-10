import classes from './Accessories.module.css';

export const Line = ({ style }) => {
  return <hr className={`${classes.line} ${style}`}></hr>;
};
