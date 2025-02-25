function disemvowel(str) {
    let newStr = "";
    let vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if (!vowels.includes(char)) {
        newStr += char
      }
    }
    return newStr;
  }