import classes from './List.module.css';
import Item from './Item';

const List = ({ style, list }) => {
  const items = list.map((item, i) => (
    <Item id={item.id} key={item.id} text={item.text} number={i + 1} />
  ));

  return <ul className={`${classes.container} ${style}`}>{items}</ul>;
};

export default List;
