class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const midPoint = Math.floor(this.length / 2);
    if (index <= midPoint) {
      console.log("Looping from the head");
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      console.log("Looping from the tail");
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    const foundIndex = this.get(index);
    if (!foundIndex) return false;

    foundIndex.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    //* first connection
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    //* second connection
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  listTraverse() {
    let current = this.head;

    while (current) {
      console.log({
        value: current.val,
        prevValue: current.prev ? current.prev.val : null,
      });

      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("four");
list.push("five");
list.push("six");
list.push("seven");
list.push("eight");
list.push("nine");
list.push("ten");
