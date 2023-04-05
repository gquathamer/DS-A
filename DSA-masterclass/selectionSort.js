const selectionSort = arr => {
 // store the first element as the smallest element so far
 // compare to next item
 // if smaller number is found designate to be new minimum
 // if smallest is not the value you initially began with, swap
 // repeat with next element
 for (let i = 0; i < arr.length; i++) {
  let smallestValueIndex = i;
  let swapped = false;
  for (let j = i + 1; j < arr.length; j++) {
   if (arr[smallestValueIndex] > arr[j]) {
    smallestValueIndex = j;
    swapped = true;
   }
  }
  const temp = arr[i];
  arr[i] = arr[smallestValueIndex];
  arr[smallestValueIndex] = temp;
  if (!swapped) {
   return arr;
  }
 }
 return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));
