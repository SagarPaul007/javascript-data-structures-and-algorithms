class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else return undefined;
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;

    while (current) {
      if (current.value === value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }

    return false;
  }

  DFSPreOrder() {
    let current = this.root;
    let result = [];

    function traverse(node) {
      result.push(node.value); // push node
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return result;
  }

  DFSPostOrder() {
    let current = this.root;
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value); // push node
    }

    traverse(current);
    return result;
  }

  DFSInOrder() {
    let current = this.root;
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value); // push node
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return result;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
