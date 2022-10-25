function getRandomNumber (min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
        return NaN;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

getRandomNumber (-6,9);
checkStringLength ('hjjh fuhjhb gjk', 16);
