import classes from './Heading.module.css';

import React from 'react';

const Heading = (
  { style, heading1, heading2, heading3, heading4, heading5 },
  ref
) => {
  return (
    <div className={`${classes.container} ${style}`} ref={ref}>
      <div className={classes.headingBox1}>
        <h1 className={`${classes.heading1} heading-display moveInLeft`}>
          {heading1}
        </h1>
        <h2 className={`${classes.heading2} heading-2 moveInRight`}>
          {heading2}
        </h2>
      </div>

      <div className={classes.headingBox2}>
        <h3 className={`${classes.heading5} heading-3`}>{heading5}</h3>
        <h1 className={`${classes.heading3} heading-1`}>{heading3}</h1>
        <h2 className={`${classes.heading4} heading-2`}>{heading4}</h2>
      </div>
    </div>
  );
};

export default React.forwardRef(Heading);
