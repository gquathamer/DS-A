function solution(sequence) {
 // input is an array of integers
 // output is a boolean
 // create a counter variable that will hold the position being omitted from the array
 // inside of a while loop, create a for loop
 // if counter is the same as i set i back one or i and j forward one
 // [1, 3, 2, 1]
 //        _
 //      _     _
 // loop through the array and return false if elem 1 is > elem 2
 let counter = 0;
 while (counter < sequence.length) {
  let slicedElement = sequence.splice(counter, 1);
  for (let i = 0, j = i + 1; i < sequence.length - 1; i++, j++) {
   if (sequence[i] >= sequence[j]) {
    break;
   }
   if (j === sequence.length - 1) {
    return true;
   }
  }
  sequence.splice(counter, 0, slicedElement[0]);
  counter++;
 }
 return false;
}

solution([1, 2, 1, 2]);
