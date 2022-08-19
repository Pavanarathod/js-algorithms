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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push("pavan");
list.push("Abhishek");
list.push("Manjunath");

// const first = new Node("Hello");
// first.next = new Node("Friend");
// first.next.next = new Node("fuck");
// first.next.next.next = new Node("You");
// console.log(JSON.stringify(first, null, 4));
