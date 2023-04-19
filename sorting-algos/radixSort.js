import * as radixHelper from './radixHelper.js';

function radixSort(arr) {
 // pass in array of numbers
 // find largest number of digits in any of these numbers
 // loop from 0 up until largest number of digits
 // each time through create buckets (arrays) for each digit
 // place each number in the corresponding bucket based on its kth digit
 const largestNumDigits = radixHelper.mostDigits(arr);
 for (let i = 0; i < largestNumDigits; i++) {
  let buckets = Array.from({ length: 10 }, () => []);
  for (let j = 0; j < arr.length; j++) {
   buckets[radixHelper.getDigit(arr[j], i)].push(arr[j]);
  }
  arr = [].concat(...buckets);
 }
}

radixSort([1, 92, 101, 13, 1002, 98, 543, 6, 123, 9]);
