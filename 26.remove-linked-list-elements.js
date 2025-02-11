var removeElements = function (head, val) {
  while (head.includes(val)) {
    let index = head.indexOf(val);
    head.splice(index, 1);
  }
  return head;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6))
