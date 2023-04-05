function bubbleSort(arr) {
 // start looping from end to the beginning
 // start an inner loop from the beginning until i - 1
 // if arr[j] > arr[j + 1] swap them
 // return sorted array
 // implement a swap function
 for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
   if (arr[j] > arr[j + 1]) {
    swap(arr, j, j + 1);
   }
  }
 }
 return arr;
}

function swap(arr, idx1, idx2) {
 let temp = arr[idx1];
 arr[idx1] = arr[idx2];
 arr[idx2] = temp;
}

console.log(bubbleSort([13, 26, 2, 4, 18, 9]));
