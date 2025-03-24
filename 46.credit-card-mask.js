function maskify(cc) {
  if (cc.length <= 4) return cc;

  let lastFour = cc.slice(cc.length - 4).split("");

  let masked = cc.slice(0, cc.length - 4).split("");
  return masked
    .map((char) => "#")
    .concat(lastFour)
    .join("");
}
