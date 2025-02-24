var removeElements = function (head, val) {
  let node = { next: head };
  let current = node;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return node.next;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
