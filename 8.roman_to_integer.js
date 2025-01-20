/**
 * @param {string} s
 * @return {number}
 */

// var romanToInt = function (s) {
//   let arr = s.split("");
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "I" && arr[i + 1] === "V") {
//       result += 4
//       i++
//     } else if (arr[i] === "I" && arr[i + 1] === "X") {
//       result += 9;
//       i++
//     } else if (arr[i] === "X" && arr[i + 1] === "L") {
//       result += 40;
//       i++
//     } else if (arr[i] === "X" && arr[i + 1] === "C") {
//       result += 90;
//       i++
//     } else if (arr[i] === "C" && arr[i + 1] === "D") {
//       result += 400;
//       i++
//     } else if (arr[i] === "C" && arr[i + 1] === "M") {
//       result += 900;
//       i++
//     } else if (arr[i] === "I") {
//       result++;
//     } else if (arr[i] === "V") {
//       result += 5;
//     } else if (arr[i] === "X") {
//       result += 10;
//     } else if (arr[i] === "L") {
//       result += 50;
//     } else if (arr[i] === "C") {
//       result += 100;
//     } else if (arr[i] === "D") {
//       result += 500;
//     } else if (arr[i] === "M") {
//       result += 1000;
//     }
//   }
//   return result;
// };

var romanToInt = function (s) {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = nums[s[i]];
    let next = nums[s[i + 1]];
    if (next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
