// stores a piece of data called val
// reference to next node called next

class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

var first = new Node('hi');
first.next = new Node('there');
first.next.next = new Node('how');

console.log(first);

class SinglyLinkedList {
 constructor() {
  this.length = 0;
  this.head = null;
  this.tail = null;
 }

 push(val) {
  // create a new node using the value passed to the function
  // using passed in value
  // if the head is empty set the head and the tail to newly created node
  // otherwise, if there is a head, set the next property on the tail to be the new
  // node and set the tail property on the list to be the newly created node
  // increment the length
  const newNode = new Node(val);
  if (this.head === null) {
   this.head = newNode;
   this.tail = newNode;
  } else {
   this.tail.next = newNode;
   this.tail = newNode;
  }
  this.length++;
  return this;
 }

 pop() {
  // no nodes in the list, return undefined
  // loop through the list until you get to the tail
  // while node.next is true
  // set second to last next property to null
  // set the tail to be the second to last node
  // decrement list length by 1
  // return the value that was removed

  if (this.tail === null) {
   return undefined;
  }
  let currentNode = this.head;
  let newTail = currentNode;
  while (currentNode.next) {
   newTail = currentNode;
   currentNode = currentNode.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
   this.head = null;
   this.tail = null;
  }
  return currentNode;
 }

 shift() {
  if (this.head === null) {
   return undefined;
  }
  const existingHead = this.head;
  this.head = existingHead.next;
  this.length--;
  return existingHead;
 }

 unShift(value) {
  const newHead = new Node(value);
  if (this.head === null) {
   this.head = newHead;
   this.tail = newHead;
  } else {
   const existingHead = this.head;
   newHead.next = existingHead;
   this.head = newHead;
  }
  this.length++;
  return this;
 }

 get(idx) {
  // initialize a count variable
  // initialize a currentNode variable
  // while while count < idx set currentNode to currentNode.next
  if (idx < 0 || idx >= this.length) return null;
  let count = 0;
  let currentNode = this.head;
  while (count < idx) {
   currentNode = currentNode.next;
   count++;
  }
  return currentNode;
 }

 set(idx, value) {
  const currentNode = this.get(idx);
  if (currentNode) {
   currentNode.val = value;
   return true;
  }
  return false;
 }

 insert(idx, value) {
  // if idx < 0 || idx > this.length return false
  // if the index is same length as end, use push!
  // if index is 0, unshift
  // use get to find the node at index - 1
  // set the next property of previous node to be a new node
  // connect new node to old next node
  if (idx < 0 || idx > this.length) return false;
  if (idx === this.length) return !!this.push(value);
  if (idx === 0) return !!this.unShift(value);
  const newNode = new Node(value);
  const currentNode = this.get(idx - 1);
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.length++;
  return true;
 }

 remove(idx) {
  if (idx < 0 || idx > this.length) return false;
  if (idx === this.length - 1) return !!this.pop();
  if (idx === 0) return !!this.shift();
  const previousNode = this.get(idx - 1);
  const removed = previousNode.next;
  previousNode.next = removed.next;
  this.length--;
  return previousNode;
 }

 reverse() {
  // set the tail to be the head
  // how to get the node behind previous, use get?
  // get the node behind prevTail
  // set new head .next to be node behind
  // move forward so node behind is now subject
  // repeat until you reach the head
  // set the old head to new tail
  const newHead = this.tail;
  const newTail = this.head;
  let position = this.length - 1;
  while (position > 0) {
   const reversedNode = this.get(position);
   const reversedNodeNext = this.get(position - 1);
   reversedNode.next = reversedNodeNext;
   position--;
  }
  this.head = newHead;
  this.tail = newTail;
  this.tail.next = null;
  return this;
 }

 print() {
  const arr = [];
  let current = this.head;
  while (current) {
   arr.push(current.val);
   current = current.next;
  }
  console.log(arr);
 }
}

const myList = new SinglyLinkedList();
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
console.log(myList.print());
