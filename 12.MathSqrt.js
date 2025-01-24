var mySqrt = function (x) {
  if (x === 0) return 0;

  let guess = x;
  while (guess * guess > x) {
    guess = Math.floor((guess + Math.floor(x / guess)) / 2);
  }

  return guess;
};
