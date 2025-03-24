function dnaStrand(dna) {
  let arr = dna.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      newArr.push("T");
    } else if (arr[i] === "T") {
      newArr.push("A");
    } else if (arr[i] === "C") {
      newArr.push("G");
    } else if (arr[i] === "G") {
      newArr.push("C");
    }
  }
  return newArr.join("");
}

function dnaStrand(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((char) => pairs[char])
    .join("");
}
