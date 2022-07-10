export const checkDatePassed = function (date, locale = 'en-US') {
  // Minutes
  const calcMinutesPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60));

  const minutesPassed = calcMinutesPassed(new Date(), date);
  if (minutesPassed === 0) return 'Just now';
  if (minutesPassed === 1) return `${minutesPassed} minute ago`;
  if (minutesPassed < 60) return `${minutesPassed} minutes ago`;
  // Hours
  else {
    const calcHoursPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60));
    const hoursPassed = calcHoursPassed(new Date(), date);
    if (hoursPassed === 1) return `${hoursPassed} hour ago`;
    if (hoursPassed < 24) return `${hoursPassed} hours ago`;
    // Days
    else {
      const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
      const daysPassed = calcDaysPassed(new Date(), date);
      if (daysPassed === 1) return ` Yesterday`;
      if (daysPassed <= 7) return `${daysPassed} days ago`;
      // Date
      else {
        return new Intl.DateTimeFormat(locale).format(date);
      }
    }
  }
};

export const formatCurrentDate = (locale = 'en-US') => {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(now);
};
