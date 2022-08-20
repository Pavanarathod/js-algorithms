class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      /**
       ** newTail is not the next node it is always behind the next node then we can set the next node of the new tail to null;
       */
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.length--;
    // this where we are setting it to null.
    this.tail.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;

    this.head = current.next;
    this.length--;
    return current;
  }
}

const list = new SinglyLinkedList();
list.push("Pavan");
list.push("Abhishek");
list.push("Manjunath");
list.push("Prajwal");
