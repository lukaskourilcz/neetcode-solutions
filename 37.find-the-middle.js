function getMiddle(s) {
    let result
    
  if(s.length % 2 !== 0){
  result = s[Math.floor(s.length/2)] 
      }
    else {
        result = s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
    return result
  }