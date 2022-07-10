export const formatCurrency = function (
  value,
  locale = 'en-US',
  currency = 'PHP'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
