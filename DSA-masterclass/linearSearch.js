function linearSearch(arr, value) {
 // accepts an array and a value
 // loop through and check if the current element is the value
 // if true, return index
 // if never found return -1
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
   return i;
  }
 }
 return -1;
}

linearSearch([1, 2, 3, 4, 5], 45);
