function areThereDuplicates(...args) {
 // good luck. (supply any arguments you deem necessary.)
 // any number and type of arguments can be passed in
 // could we assume all arguments will be of the same type?
 // take all arguments and put them in an array
 // then use the multiple pointers pattern to iterate over the array and check for duplicates
 // put arguments into an array

 //['a', 'b', 'c', 'a']
 // iterate over the array
 // create an object that stores each unique value
 // increment value if it's found again
 // while loop, condition inside that breaks out if a value is greater than 1
 const freqCounter = {};
 for (const value of args) {
  if (!freqCounter[value]) {
   freqCounter[value] = 1;
  } else {
   return true;
  }
 }
 return false;

 // iterate over that array using multiple pointers pattern
}

areThereDuplicates('a', 'b', 'c', 'a');
