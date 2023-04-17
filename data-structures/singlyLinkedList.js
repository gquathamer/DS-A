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
}

const myList = new SinglyLinkedList();
myList.push(1);
myList.push(2);
myList.push(3);
console.log(myList.unShift(4));
console.log(myList);
