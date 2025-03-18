function reduce(fraction) {
  const numerator = fraction[0];
  const denominator = fraction[1];

  function findGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const gcd_value = findGCD(numerator, denominator);
  const reduced_numerator = numerator / gcd_value;
  const reduced_denominator = denominator / gcd_value;

  return [reduced_numerator, reduced_denominator];
}
