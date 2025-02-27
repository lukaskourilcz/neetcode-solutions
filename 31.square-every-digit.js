function squareDigits(num){
    let arr = num.toString().split('')
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      newArr.push(Math.pow(arr[i], 2))
    }
    return Number(newArr.join(''));
  }