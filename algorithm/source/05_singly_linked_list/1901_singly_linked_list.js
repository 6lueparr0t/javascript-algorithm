class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
const first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");
first.next.next.next.next.next = new Node("doing?");

console.log(first);
console.log(first.next);
console.log(first.next.next);
console.log(first.next.next.next);
console.log(first.next.next.next.next);
console.log(first.next.next.next.next.next);
*/

class SinglyLinkedList {
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
    return current;
  }
  travaerse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) this.tail = newNode;

    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
// list.push("Hello");
// list.push("Goodbye");
// list.push("!");

// console.log('before pop :');
// list.travaerse();
// list.pop();

// console.log('after pop :');
list.travaerse();
console.log(list.unshift("test2"));
list.travaerse();
console.log(list.unshift("test3 "));
list.travaerse();
