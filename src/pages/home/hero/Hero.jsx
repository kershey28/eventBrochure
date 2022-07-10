import classes from './Hero.module.css';

import React from 'react';

import heroImg from '../../../assets/img/home/hero.png';
import ButtonBox from '../../../components/buttons/ButtonBox';
import { Line } from '../../../components/accessories/Accessories';
import { IconCalendar, IconLocation } from '../../../components/icons/Icon';

const Hero = ({ style }, ref) => {
  return (
    <div className={`${classes.container} ${style}`} ref={ref}>
      <div className={classes.headBox}>
        <img src={heroImg} alt="hero" className={classes.heroImg} />
        <h1 className={`${classes.heading1} heading-display moveInLeft`}>
          Uniting Climate Technology Stakeholders
        </h1>
        <h1 className={`${classes.heading2} heading-1 moveInRight`}>
          for a Clean, Sustainable Asia
        </h1>
        <Line style={classes.line} />
        <h3 className={`${classes.show} heading-3`}>
          Asia Climate Technology Show
        </h3>
      </div>

      <div className={classes.setBox}>
        <div className={classes.calendarBox}>
          <IconCalendar />
          <h2 className={`${classes.date} heading-2`}>December 1-2, 2022</h2>
        </div>
        <div className={classes.locationBox}>
          <IconLocation style={classes.placeIcon} />
          <h2 className={`${classes.place} heading-2`}>
            Suntec Singapore Convention & Exhibition Centre
          </h2>
        </div>
      </div>

      <ButtonBox cta="Discover" ghost="About" style={classes.btnBox} />
    </div>
  );
};

export default React.forwardRef(Hero);
