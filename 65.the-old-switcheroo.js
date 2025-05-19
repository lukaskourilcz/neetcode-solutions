function vowel2index(str) {
    const vowels = "aeiou";
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result += (i + 1); // 1-indexed
      } else {
        result += str[i];
      }
    }
  
    return result;
  }
  