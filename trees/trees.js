class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (newNode.value === current.value)
          return "value allready exists in the tree";
        if (newNode.value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //* Finding a node in the tree..

  find(value) {
    if (this.root === null) return false;
    if (this.root.value === value) return true;
    else {
      let current = this.root;
      let found = false;

      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }

      if (!found) return false;
      return current;
    }
  }

  search(value) {
    if (this.root === null) return false;
    if (this.root.value === value) return true;
    else {
      let current = this.root;

      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }

      return current ? current : "not found";
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(4);
tree.insert(2);
tree.insert(12);
tree.insert(15);
tree.insert(20);
