function countUniqueValues(arr) {
 // add whatever parameters you deem necessary - good luck!
 // input will be a sorted array
 // count the unique number of values within the array
 // start with 2 pointers
 let beginningPointer = 0;
 let endingPointer = arr.length - 1;
 //console.lgo(beginningPointer, endingPointer);
 // one pointer for first index
 // one pointer for the second index
 // create another pointer/variable that holds the count of unique values (array?, object?, number)
 const uniqueValuesObject = {};
 // start with a comparison between the 2 pointers (beginning and end)
 // loop through the array from comparing indexes of start and end
 while (beginningPointer < endingPointer) {
  // check if the value of the array exists as a key in the object, if not create key with value of key
  if (!uniqueValuesObject[arr[beginningPointer]]) {
   uniqueValuesObject[arr[beginningPointer]] = arr[beginningPointer];
  }
  // do the same for the last index
  if (!uniqueValuesObject[arr[endingPointer]]) {
   uniqueValuesObject[arr[endingPointer]] = arr[endingPointer];
  }
  beginningPointer++;
  endingPointer--;
 }
 return Object.keys(uniqueValuesObject).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
