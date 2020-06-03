export const getFilter = function (effect, value) {
  const calculatedValue = value * effect.max + effect.min;
  return `${effect.filter}(${calculatedValue}${effect.unit})`;
};
