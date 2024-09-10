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

    // 맨 마지막 노드 검색
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // newTail : 마지막 전(tail)
    // current : 마지막
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  traverse() {
    let idx = 1;
    let current = this.head
    while(current) {
      console.log(`${idx}:`, current.data);
      current = current.next;
      idx++;
    }
  }

  // 맨 앞의 헤드를 제거함
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  // 맨 앞에 헤드에 데이터를 넣음
  unshift(val) {
    const newNode = new Node(val);

    // 원래 코드
    // if(!this.head) {
    //   this.head = newNode;
    //   this.tail = this.head;
    // } else {
    //   newNode.next = this.head;
    //   this.head = newNode;
    // }

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
// list.traverse();
// list.pop();

// console.log('after pop :');
console.log(list.unshift("test2"));
console.log(list.unshift("test3 "));
list.traverse();
