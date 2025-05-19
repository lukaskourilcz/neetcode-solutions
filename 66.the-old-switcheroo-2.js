function encode(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (alphabet.includes(char)) {
        const index = alphabet.indexOf(char) + 1;
        result.push(index);
      } else {
        result.push(char);
      }
    }
  
    return result.join('');
  }
  