export default function pivotHelper(arr, start = 0, end = arr.length - 1) {
 // accept 3 args; an array, start index, end index
 // grab pivot from start of array
 // store current pivot index in a variable
 // loop through the array from beginning until end
 // if pivot is greater than current element, increment the pivot index variable and then swap the
 // the current element with the element at the pivot index
 // swap the starting element i.e. the pivot with the pivot index
 // return the pivot index
 let pivot = arr[start];
 let swapIndex = start;
 for (let i = start + 1; i <= end; i++) {
  if (pivot > arr[i]) {
   swapIndex++;
   const temp = arr[swapIndex];
   arr[swapIndex] = arr[i];
   arr[i] = temp;
  }
 }
 const temp = arr[swapIndex];
 arr[swapIndex] = arr[start];
 arr[start] = temp;
 return swapIndex;
}
