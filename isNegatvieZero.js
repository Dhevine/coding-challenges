function isNegativeZero(n) {
  return Object.is(n, -0) || false;
}

isNegativeZero(-0); // true;
isNegativeZero(1); // false;
isNegativeZero(2); // false;
isNegativeZero(3); // false;
isNegativeZero(4); // false;
isNegativeZero(5); // false;
isNegativeZero(Infinity); // false
isNegativeZero(-Number.MIN_VALUE); // false
