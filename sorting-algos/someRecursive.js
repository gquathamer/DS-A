// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
 // add whatever parameters you deem necessary - good luck!
 // function returns true if a single value in the array
 // returns true after being passed to the callback
 // input 1 is an array
 // input 2 is a callback
 // loop over the array and invoke the callback for each element
 // until you're at the end of the array
 // if the return from the callback is true at any point return true
 // if you reach the end of the array then return false
 if (array.length < 1) {
  return false;
 }
 if (callback(array[0])) {
  return true;
 }
 return someRecursive(array.slice(1), callback);
}

someRecursive([4, 6, 8], isOdd);
