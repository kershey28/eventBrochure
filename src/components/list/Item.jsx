import classes from './Item.module.css';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Item = ({ style, text, number }) => {
  // observer
  const [itemRef, isItemAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  const classItemRef = isItemAppeared ? 'moveInBottom' : 'hidden';

  return (
    <li
      className={`${classes.container} ${style} ${classItemRef}`}
      ref={itemRef}
    >
      <span className={classes.listNumber}>{number}</span>
      <span className={classes.listText}>{text}</span>
    </li>
  );
};

export default Item;
