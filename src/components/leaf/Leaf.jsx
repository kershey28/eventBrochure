import classes from './Leaf.module.css';

import { IconPlus } from '../icons/Icon';
import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Leaf = ({ style, noun, quantity, noPlus }) => {
  // observer
  const [leafRef, isLeafAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  const classLeafRef = isLeafAppeared ? 'moveInBottom' : 'hidden';

  return (
    <div
      className={`${classes.container} ${style} ${classLeafRef}`}
      ref={leafRef}
    >
      <div className={classes.quantityBox}>
        <h1 className={`${classes.quantity} heading-1`}>{quantity}</h1>
        {!noPlus && <IconPlus style={classes.icon} />}
      </div>

      <h3 className={`${classes.noun} heading-3`}>{noun}</h3>
    </div>
  );
};

export default Leaf;
