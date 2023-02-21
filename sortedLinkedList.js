class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class SortedLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  insert(value) {
    const newNode = new Node(value);
    if (value < this.head.value) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else if (value > this.tail.value) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next.value < value) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }

    return this;
  }

  _print() {
    console.log("Head: ", this.head.value);
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(currentNode.value);
    console.log("Tail: ", this.tail.value);
  }
}
