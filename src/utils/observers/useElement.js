import { useRef, useEffect, useState } from 'react';

export const useElementOnScreen = options => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = entries => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [containerRef, isVisible];
};

export const useElementOnMobile = options => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cannotHover = window.matchMedia(`(hover:none)`).matches;

  const callbackFunction = entries => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const current = containerRef.current;

    //remove observer in desktop
    if (!cannotHover) {
      return observer.unobserve(current);
    }

    if (current && cannotHover) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options, cannotHover]);

  return [containerRef, isVisible];
};

export const useElementOnScreenOnce = options => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // animation
  useEffect(() => {
    // functionality
    const callbackFunction = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setIsVisible(true);

      observer.unobserve(entry.target);
    };

    //observer;
    const elementObserver = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 1,
    });

    elementObserver.observe(containerRef.current);
  }, []);

  return [containerRef, isVisible];
};
