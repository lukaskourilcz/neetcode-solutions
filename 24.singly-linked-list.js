// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index < 0) {
      return "invalid";
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let position = 0;

    while (position < index - 1 && current !== null) {
      current = current.next;
      position += 1;
    }

    if (current === null) {
      return "out of reach";
    }

    newNode.next = current.next;
    current.next = newNode;
  }
  delete(index) {
    if (this.head === null) {
      return "nothing to delete";
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    let position = 0

    while (current !== null && position < index) {
      prev = current;
      current = current.next;
      position++
    }
    if (current === null) {
      return;
    }
    prev.next = current.next;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.delete(0)
console.log(myLinkedList.printList());
