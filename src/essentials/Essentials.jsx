import Navigation from './Navigation';

import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Essentials = props => {
  ///////////////////////////////////////
  // Sticky Navigation
  const headerRef = props.headerRef;
  const navRef = useRef(null);

  const [isNavAppeared, setNavAppeared] = useState(true);
  const classRef = isNavAppeared ? 'navSticky' : 'navAbsolute';
  const location = useLocation();

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;

    // functionality
    const stickyNav = entries => {
      const [entry] = entries;

      if (location.pathname === '/') return;

      if (!entry.isIntersecting) {
        setNavAppeared(true);
      } else setNavAppeared(false);
    };

    //observer;
    const navigationObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navigationObserver.observe(headerRef.current);
  }, [classRef, location, headerRef]);

  ///////////////////////////////////////
  // Arguments
  const link1 = 'About';
  const link2 = 'Events';
  const link3 = 'Exhibits';
  const link4 = 'Contact';

  return (
    <>
      <Navigation
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        ref={navRef}
        style={classRef}
      />
    </>
  );
};

export default Essentials;
