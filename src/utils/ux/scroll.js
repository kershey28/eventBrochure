export const scrollIntoPosition = position => {
  let coord;

  if (position === 'top') coord = 0;

  window.scrollTo({
    top: coord,
    behavior: 'smooth',
  });
};
