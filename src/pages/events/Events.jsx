import classes from './Events.module.css';

import React from 'react';

import Wrapper from '../../components/wrappers/Wrapper';
import Cards from '../../components/cards/Cards';
import Leaf from '../../components/leaf/Leaf';
import { IconPlus } from '../../components/icons/Icon';

import { EVENTSDATA1, EVENTSDATA2 } from '../../data/events/events';

const Events = ({ style }, ref) => {
  return (
    <Wrapper styleContent={`${classes.container} ${style}`}>
      <div className={classes.headingBox} ref={ref}>
        <div className={classes.heading}>
          <span
            className={`${classes.headingNumber} heading-display moveInLeft`}
          >
            2
          </span>
          <h1 className={`${classes.headingText} heading-1 moveInRight`}>
            Days
          </h1>
        </div>
        <div className={classes.heading}>
          <span className={`${classes.headingNumber} heading-display`}>8</span>
          <h1 className={`${classes.headingText} heading-1`}>Tracks</h1>
        </div>
        <div className={classes.heading}>
          <span className={`${classes.headingNumber} heading-display`}>
            100
          </span>
          <IconPlus style={classes.iconPlus} />
          <h1 className={`${classes.headingText} heading-1`}>Speakers</h1>
        </div>
      </div>

      <Leaf noun="Dec" quantity="1st" noPlus style={classes.title} />
      <Cards style={classes.cards} list={EVENTSDATA1} />
      <Leaf noun="Dec" quantity="2nd" noPlus style={classes.title} />
      <Cards style={classes.cards} list={EVENTSDATA2} />
    </Wrapper>
  );
};

export default React.forwardRef(Events);
