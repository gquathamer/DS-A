function binarySearch(arr, value) {
 // variable that points to first index
 // variable that points to last index
 // while the left pointer comes before the right pointer
 // create a pointer in the middle
 // if that is correct value return
 // if the valua is too small, move the left pointer up
 // if the value is too large, move the right pointer down
 // if the value is never found return -1
 // think about reassigning the right pointer to middle based on result
 let leftPointer = 0;
 let rightPointer = arr.length - 1;
 let middlePointer = Math.floor(rightPointer / 2);
 while (leftPointer < rightPointer) {
  if (arr[middlePointer] === value) {
   return middlePointer;
  } else if (value > arr[middlePointer]) {
   leftPointer = middlePointer;
   middlePointer = Math.ceil(leftPointer + (rightPointer - leftPointer) / 2);
  } else {
   rightPointer = middlePointer;
   middlePointer = Math.floor(rightPointer / 2);
  }
 }
 return -1;
}

binarySearch(
 [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
 100,
);
