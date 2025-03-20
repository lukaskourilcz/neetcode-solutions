function XO(str) {
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
  
    for (let char of str) {
      if (char === 'x') xCount++;
      if (char === 'o') oCount++;
    }
  
    return xCount === oCount;
  }