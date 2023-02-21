class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node with the given value to the end of the list
  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  // Removes the last node from the list and returns its value.
  pop() {
    if (this.head === null) {
      return undefined;
    }
    const nodeToRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToRemove.prev;
      this.tail.next = null;
      nodeToRemove.prev = null;
    }
    this.length--;

    return nodeToRemove.value;
  }

  // Add a new node with the given value to the beginning of the list
  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  // Remove the first node from the list and return its value
  shift() {
    if (this.head === null) {
      return undefined;
    }

    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.head = nodeToRemove.next;
      this.head.prev = null;
      nodeToRemove.next = null;
    }
    this.length--;

    return nodeToRemove;
  }

  // Returns the node at the given index, or null if the index is out of bounds.
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = null;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (node !== null) {
      node.value = value;
      return true;
    }
    return false;
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
      this.unshift(value);
      return true;
    }

    const node = new Node(value);
    let prevNode = this.get(index - 1);
    let nexNode = prevNode.next;
    node.next = nexNode;
    node.prev = prevNode;
    prevNode.next = node;
    nexNode.prev = node;
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
      return this.shift();
    }

    const nodeToRemove = this.get(index);
    const prevNode = nodeToRemove.prev;
    const nextNode = nodeToRemove.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    return nodeToRemove.value;
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
