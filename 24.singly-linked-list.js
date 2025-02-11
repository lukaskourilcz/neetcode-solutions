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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index >= this.length) {
      this.append(value);
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index) {
    if (this.head === null) {
      return "nothing to delete";
    }
    if (index >= this.length || index < 0) {
      return "Index out of range";
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;

    if (nodeToDelete === this.tail) {
      this.tail = leader;
    }

    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(4);
console.log(myLinkedList.printList());
