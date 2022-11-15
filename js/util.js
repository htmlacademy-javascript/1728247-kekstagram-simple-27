const getRandomNumber = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    return NaN;
  }
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const checkStringLength = (string, maxLength) => string.length <= maxLength;

export {getRandomNumber};
export {getRandomElement};
export {checkStringLength};
