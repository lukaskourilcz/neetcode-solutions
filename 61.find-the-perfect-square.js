function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  let prfct = Math.pow(sqrt + 1, 2);
  console.log(prfct);

  if (!Number.isInteger(sqrt)) {
    return -1;
  } else {
    return prfct;
  }
}
