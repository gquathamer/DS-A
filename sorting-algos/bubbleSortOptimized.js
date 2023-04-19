function bubbleSortOptimized(arr) {
 let swapped;
 for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
   swapped = false;
   if (arr[j] > arr[j + 1]) {
    swapped = true;
    const temp = arr[j + 1];
    arr[j + 1] = arr[j];
    arr[j] = temp;
   }
  }
  if (!swapped) {
   return arr;
  }
 }
 return arr;
}

console.log(bubbleSortOptimized([1, 2, 3, 4, 5, 6]));
