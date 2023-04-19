// ES6

class Student {
 constructor(firstName, lastName, year) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grade = year;
  this.tardies = 0;
  this.scores = [];
 }

 // instance methods

 fullName() {
  return `Your full name is ${this.firstName} ${this.lastName}`;
 }

 markLate() {
  this.tardies++;
 }

 addScore(score) {
  this.scores.push(score);
  return this.scores;
 }

 // static method, not related to any particular instance, you call it by Student.enrollStudents()

 static enrollStudents() {
  return 'ENROLLING';
 }
}

const garrett = new Student('Garrett', 'Quathamer');

console.log(garrett.fullName());

garrett.markLate();

console.log(garrett.tardies);

garrett.addScore(98);

console.log(garrett.scores);

console.log(Student.enrollStudents());

// ES5

function Teacher(firstName) {
 this.firstName = firstName;
}

Teacher.prototype.printName = function () {
 return this.firstName;
};

const bob = new Teacher('bob');

// instance methods

bob.fullName = function () {
 return this.firstName;
};

console.log(bob.fullName());
