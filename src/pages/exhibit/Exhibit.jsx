import classes from './Exhibit.module.css';

import React from 'react';

import Wrapper from '../../components/wrappers/Wrapper';
import Heading from '../../components/heading/Heading';
import List from '../../components/list/List';
import Carousel from '../../components/carousel/Carousel';

import HEADINGDATA from '../../data/exhibits/heading';
import LISTDATA from '../../data/exhibits/exhibits';

const Exhibit = ({ style }, ref) => {
  return (
    <Wrapper styleContent={`${classes.container} ${style}`}>
      <Heading
        style={classes.headingBox}
        heading1={HEADINGDATA[0]}
        heading2={HEADINGDATA[1]}
        heading5={HEADINGDATA[2]}
        heading4={HEADINGDATA[3]}
        ref={ref}
      />
      <Carousel style={classes.carousel} />
      <h1 className={`${classes.title} heading-1`}>Who should exhibit?</h1>
      <List style={classes.list} list={LISTDATA} />
    </Wrapper>
  );
};

export default React.forwardRef(Exhibit);
