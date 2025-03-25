function getSum(a, b) {
  if (a === b) return a;

  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let res = 0;
  for (let i = start; i <= end; i++) {
    res = res + i;
  }
  return res;
}
