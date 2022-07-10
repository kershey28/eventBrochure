import classes from './Cards.module.css';
import Card from './Card';

const Cards = ({ style, list }) => {
  const items = list.map(item => (
    <Card
      id={item.id}
      key={item.id}
      title={item.title}
      place={item.place}
      time={item.time}
      img={item.img}
    />
  ));

  return <ul className={`${classes.container} ${style}`}>{items}</ul>;
};

export default Cards;
