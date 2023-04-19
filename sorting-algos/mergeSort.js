import mergeFunction from './mergeSortMergeFunction.js';

const mergeSort = arr => {
 // break up the array into halves until you have arrays that are empty or have one element
 // once we have the small arrays we merge them back using our merge function until at
 // full length

 // split an array into 2 arrays
 // find middle point and slice both way
 if (arr.length <= 1) return arr;
 let mid = Math.floor(arr.length / 2);
 let left = mergeSort(arr.slice(0, mid));
 let right = mergeSort(arr.slice(mid));
 return mergeFunction(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));
