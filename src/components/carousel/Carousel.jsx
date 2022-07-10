import classes from './Carousel.module.css';

import img1 from '../../assets/img/exhibits/meet.webp';
import img2 from '../../assets/img/exhibits/educate.webp';
import img3 from '../../assets/img/exhibits/showcase.webp';
import img4 from '../../assets/img/exhibits/expose.webp';
import img5 from '../../assets/img/exhibits/generate.webp';
import img6 from '../../assets/img/exhibits/sell.webp';
import img7 from '../../assets/img/exhibits/connect.webp';
import img8 from '../../assets/img/exhibits/inspire.webp';

import { useState, useEffect, useRef } from 'react';

const phoneMediaQuery = window.matchMedia('(max-width: 600px)');
const slideWidth = phoneMediaQuery.matches ? 25 : 30;

const _items = [
  {
    content: {
      title: 'Meet',
      text: 'Meet over 2,000 climate leaders and large businesses CIOs/CDOs/CEOs in SE Asia',
      img: img1,
    },
  },
  {
    content: {
      title: 'Educate',
      text: 'Educate the market and business decision makers through presentations and panel discussion',
      img: img2,
    },
  },
  {
    content: {
      title: 'Showcase',
      text: 'Showcase your solutions, cases studies, project references directly to the corporate buyers',
      img: img3,
    },
  },
  {
    content: {
      title: 'Expose',
      text: 'Expand your climate target, solutions to the market leaders and decision makers',
      img: img4,
    },
  },
  {
    content: {
      title: 'Generate',
      text: 'Generate leads (buyers) that are actually sourcing solutions for their green transition',
      img: img5,
    },
  },
  {
    content: {
      title: 'Sell',
      text: 'Present yourself and make sells with those corporate buyers and experts',
      img: img6,
    },
  },
  {
    content: {
      title: 'Connect',
      text: 'Connect with your peers, partnership, potential customers via this event',
      img: img7,
    },
  },
  {
    content: {
      title: 'Inspire',
      text: 'Get inspired by our refreshing presentations and inspire your potential clients by presenting your solutions',
      img: img8,
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    content: _items[idx].content,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = {
        ...item.styles,
        filter: 'grayscale(.9)',
      };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className={classes.item} style={item.styles}>
      <div className={classes.imgLink}>
        <img src={item.content.img} alt={item.content.title} />
      </div>
      <div className={classes.body}>
        <h4>{item.content.title}</h4>
        <p>{item.content.text}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = ({ style }) => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;
  const timeoutRef = useRef(null);

  // Handlers
  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems(prev => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems(prev => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = idx => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  // Timer
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextClick(), 5000);

    return () => {
      resetTimeout();
    };
  });

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div className={`${classes.wrap} ${style}`}>
      <div className={classes.inner}>
        <div className={classes.container}>
          <ul className={classes.list}>
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <div className={classes.controls}>
          <button
            className={`${classes.btn} ${classes.btnPrev}`}
            onClick={() => prevClick()}
          >
            <i className={`${classes.btnArrow} ${classes.btnArrowLeft}`} />
          </button>
          <div className={classes.dots}>
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={
                  i === activeIdx
                    ? `${classes.dot} ${classes.active}`
                    : classes.dot
                }
              />
            ))}
          </div>
          <button
            className={`${classes.btn} ${classes.btnNext}`}
            onClick={() => nextClick()}
          >
            <i className={`${classes.btnArrow} ${classes.btnArrowRight}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
