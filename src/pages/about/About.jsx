import classes from './About.module.css';

import React from 'react';

import Wrapper from '../../components/wrappers/Wrapper';
import WrapperParagraph from '../../components/wrappers/WrapperParagraph';
import Heading from '../../components/heading/Heading';
import List from '../../components/list/List';

import HEADINGDATA from '../../data/about/heading';
import LISTDATA from '../../data/about/themes';

const About = ({ style }, ref) => {
  return (
    <Wrapper styleContent={`${classes.container} ${style}`}>
      <Heading
        style={classes.headingBox}
        heading1={HEADINGDATA[0]}
        heading2={HEADINGDATA[1]}
        heading3={HEADINGDATA[2]}
        heading4={HEADINGDATA[3]}
        ref={ref}
      />

      <WrapperParagraph style={classes.paragraph}>
        Both public and private sectors around the
        <span className={`${classes.accentText} heading-3`}> Asia </span>
        are implementing robust policies and introducing bold initiatives to
        line up with the 2050/2060 net-zero commitments, the climate tech sector
        is booming and is attracting billions of dollars of investment value
        every year.
      </WrapperParagraph>

      <WrapperParagraph style={classes.paragraph}>
        Strategically located in
        <span className={`${classes.accentText} heading-3`}>
          {' '}
          Singapore
        </span>, {'  '} Asia Climate Technology Show will provide an exclusive
        stage for the entire sustainability value chain including governments,
        intl agencies, enterprises, investors, academia, entrepreneurs, climate
        technology providers etc to network and deliberate upon the ways to
        mitigate climate crisis through sustainable business solutions,
        disruptive technology and advanced knowledge.
      </WrapperParagraph>

      <WrapperParagraph style={classes.paragraph}>
        Asia Climate Technology Show will host a
        <span className={`${classes.accentText} heading-3`}> top-notch </span>
        content-driven conference programme and 200+ eminent speakers from the
        entire sustainability value chain to deliver thought-provoking insights.
        Key Themes on Conference Programme include:
      </WrapperParagraph>

      <List style={classes.list} list={LISTDATA} />

      <WrapperParagraph style={classes.paragraph}>
        As the flagship event in climate change sector, there will be an
        <span className={`${classes.accentText} heading-3`}> exhibition </span>
        space for climate technology players from across the globe to showcase
        the latest innovations, sustainable products & solutions and a myriad of
        disruptive green technology services in front of an enthused audience
        from the Southeast Asia region.
      </WrapperParagraph>
    </Wrapper>
  );
};

export default React.forwardRef(About);
