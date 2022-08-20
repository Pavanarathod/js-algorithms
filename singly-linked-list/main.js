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

    console.log("current before loop", current);
    console.log("new tail before loop", newTail);

    console.log("******************Loop begins***********");

    let loopCount = 1;
    while (current.next) {
      console.log("*****Loop count******", loopCount);
      console.log("current", current);
      console.log("new tail", newTail);
      console.log("our next current will be this node", current.next);
      // previos node not the next node;
      loopCount++;
      newTail = current;
      current = current.next;
    }

    console.log("******************Loop ends***********");

    console.log("current after loop", current);
    console.log("new tail after loop", newTail);

    this.tail = newTail;
    this.length--;
    this.tail.next = null;
    return current;
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
list.push("React");
list.push("Anguler");
list.push("Vue");
list.push("Jquery");
