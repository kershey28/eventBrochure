import classes from './Card.module.css';

import { useElementOnMobile } from '../../utils/observers/useElement';

const Card = ({ style, title, place, time, img }) => {
  // observer
  const [cardRef, isCardAppeared] = useElementOnMobile({
    root: null,
    threshold: 1,
  });

  const classCardRef = isCardAppeared ? classes.revealInfo : '';

  return (
    <li
      className={`${classes.container} ${style} ${classCardRef}`}
      ref={cardRef}
    >
      <div className={classes.overlay}></div>
      <img src={img} alt={title} className={classes.img} />
      <div className={classes.info}>
        <h2 className={`${classes.item} ${classes.title} heading-2`}>
          {title}
        </h2>
        <hr className={classes.line} />
        <div className={`${classes.item} ${classes.text} ${classes.text1}`}>
          {time}
        </div>
        <div className={`${classes.item} ${classes.text} ${classes.text2}`}>
          {place}
        </div>
      </div>
    </li>
  );
};

export default Card;
