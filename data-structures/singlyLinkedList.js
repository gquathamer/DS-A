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
}

const myList = new SinglyLinkedList();
myList.push(1);
myList.push(2);
myList.push(3);
console.log(myList.push(4));
