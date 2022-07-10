import classes from './Home.module.css';

import React from 'react';

import Wrapper from '../../components/wrappers/Wrapper';
import Hero from './hero/Hero';
import Quantity from './quantity/Quantity';
import Register from './register/Register';

import Leaves from '../../components/leaves/Leaves';

const Home = ({ style }, ref) => {
  const QUANTITYDATA = [
    { id: 'quantity1', noun: 'Attendees', quantity: '10000' },
    { id: 'quantity2', noun: 'Organizations', quantity: '1000' },
    { id: 'quantity3', noun: 'Exhibitors', quantity: '100' },
    { id: 'quantity4', noun: 'Gov & Intl Agencies', quantity: '80' },
    { id: 'quantity5', noun: 'Projects', quantity: '200' },
    { id: 'quantity6', noun: 'Speakers', quantity: '110' },
  ];

  return (
    <Wrapper style={classes.container}>
      <Leaves />
      <Hero style={classes.hero} ref={ref} />
      <Quantity style={classes.quantity} list={QUANTITYDATA} />
      <Register style={classes.register} />
    </Wrapper>
  );
};

export default React.forwardRef(Home);
