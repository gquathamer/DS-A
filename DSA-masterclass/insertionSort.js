const insertionSort = arr => {
 // start by picking the second element in the array
 // compare it to the one before it and swap if necessary
 // continue to next element and if it is in the incorrect order,
 // iterate through the sorted portion (i.e. the left side) to place
 // element correctly
 // repeat
 //
 for (let i = 1; i < arr.length; i++) {
  let currentValue = arr[i];
  for (let j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
   arr[j + 1] = arr[j];
   arr[j] = currentValue;
  }
 }
 return arr;
};

console.log(insertionSort([34, 22, 10, 19, 17]));
