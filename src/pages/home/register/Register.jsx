import classes from './Register.module.css';

import qrImg from '../../../assets/img/home/qrCode.jpg';
import logo1Img from '../../../assets/img/logo/logo-1.png';
import logo2Img from '../../../assets/img/logo/logo-2.png';

const Register = ({ style }) => {
  return (
    <div className={`${classes.container} ${style}`}>
      {' '}
      <div className={classes.scanBox}>
        <h3 className={`${classes.event} heading-3`}>
          Asia's Flagship Climate Themed Trade Event{' '}
        </h3>
        <img src={qrImg} alt="hero" className={classes.qrImg} />
        <h2 className={`${classes.scan} heading-2`}>Scan to Register</h2>
      </div>
      <div className={classes.logoBox}>
        <p>Co-presented by:</p>
        <img src={logo1Img} alt="hero" className={classes.logoImg} />
        <img src={logo2Img} alt="hero" className={classes.logoImg} />
      </div>
    </div>
  );
};

export default Register;
