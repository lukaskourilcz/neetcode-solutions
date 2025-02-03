var containsDuplicate = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  for (let i = 0; i < sorted.length -1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  } return false
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
