import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

import { scrollIntoPosition } from '../utils/ux/scroll';
import classes from './Navigation.module.css';

const Navigation = ({ link1, link2, link3, link4, style }, ref) => {
  const navRef = ref;
  const burgerRef = useRef(null);
  const [isBurgerOpened, setBurgerOpened] = useState(false);

  const burgerClickHandler = () => {
    setBurgerOpened(prevState => !prevState.check);
  };

  const navLinkHandler = () => {
    scrollIntoPosition('top');
    setBurgerOpened(false);
  };

  useEffect(() => {
    if (!isBurgerOpened) burgerRef.current.checked = false;
    if (isBurgerOpened) burgerRef.current.checked = true;
  }, [isBurgerOpened]);

  return (
    <div
      className={`${style} ${classes.navigation} ${classes.burger} `}
      ref={navRef}
    >
      <input
        type="checkbox"
        className={classes.burger__checkbox}
        id="navi-toggle"
        ref={burgerRef}
        onClick={burgerClickHandler}
      />
      <label
        className={`${classes.navigation__tab} ${classes.burger__button} ${style}`}
        htmlFor="navi-toggle"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className={classes.burger__svg}
        >
          <path
            className={`${classes.burger__line} ${classes.burger__line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line2}`}
            d="M 20,50 H 80"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>

        <NavLink
          to="/"
          className={nav =>
            nav.isActive
              ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
              : `${classes.navigation__link} ${classes.burger__link}`
          }
        >
          <Logo style={classes.burger__logoOutside} />
        </NavLink>

        <nav
          className={`${classes.navigation__content} ${classes.burger__content}`}
        >
          <div
            className={`${classes['navigation__logo-box']} ${classes['burger__logo-box']} ${classes.logo}`}
          >
            <NavLink
              to="/"
              onClick={navLinkHandler}
              className={nav =>
                nav.isActive
                  ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                  : `${classes.navigation__link} ${classes.burger__link}`
              }
            >
              <Logo />
            </NavLink>
          </div>

          <ul className={`${classes.navigation__list} ${classes.burger__list}`}>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/about"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {link1}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/events"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {link2}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <NavLink
                to="/exhibits"
                onClick={navLinkHandler}
                className={nav =>
                  nav.isActive
                    ? `${classes.navigation__link} ${classes.burger__link} ${classes.activeNav}`
                    : `${classes.navigation__link} ${classes.burger__link}`
                }
              >
                {link3}
              </NavLink>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <span
                className={`${classes.navigation__link} ${classes.burger__link}`}
              >
                {link4}
              </span>
            </li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default React.forwardRef(Navigation);
