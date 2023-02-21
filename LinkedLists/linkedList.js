class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a new node to the end of the list with the given value.
  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Removes the last node from the list and returns its value.
  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.value;
  }

  // Returns the node at the given index, or null if the index is out of bounds.
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // Inserts a new node with the given value at the given index,
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (inxed === this.length) {
      this.push(value);
      return true;
    }

    if (inxed === 0) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
      return true;
    }

    const node = new Node(value);
    let current = this.get(index - 1);
    node.next = current.next;
    current.next = node;
    this.length++;
    return true;
  }

  // Removes the node at the given index and returns its value
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      const current = this.head;
      this.head = current.next;
      this.length--;
      return current.value;
    }

    const current = this.get(index - 1);
    const removed = current.next;
    removed = removed;
    this.length--;
    return removed.value;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
