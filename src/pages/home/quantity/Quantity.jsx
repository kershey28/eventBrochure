import classes from './Quantity.module.css';

import Leaf from '../../../components/leaf/Leaf';

const Quantity = ({ style, list }) => {
  const items = list.map(item => (
    <Leaf
      id={item.id}
      key={item.id}
      noun={item.noun}
      quantity={item.quantity}
    />
  ));

  return <div className={`${classes.container} ${style}`}>{items}</div>;
};

export default Quantity;
