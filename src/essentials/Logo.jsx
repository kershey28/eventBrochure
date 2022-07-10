import classes from './Logo.module.css';

import img from '../assets/img/logo/logo-main.png';

const Logo = ({ style }) => {
  return (
    <div className={`${classes.container} ${style}`}>
      <img src={img} alt="escom logo" className={classes.img} />
    </div>
  );
};

export default Logo;
