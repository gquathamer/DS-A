const mergeFunction = (arr1, arr2) => {
 // create an emtpy array, find smallest values in each input array
 // while there are still values we haven't looked at
 // if the value in the first arr is smaller, push into results array
 // move to next value in first arr and check again
 // if value in first arr is larger, push value in second arr into results
 // move to next value in second arr
 let results = [];
 let i = 0;
 let j = 0;
 while (i < arr1.length && j < arr2.length) {
  if (arr2[j] > arr1[i]) {
   results.push(arr1[i]);
   i++;
  } else {
   results.push(arr2[j]);
   j++;
  }
 }
 while (i < arr1.length) {
  results.push(arr1[i]);
  i++;
 }
 while (j < arr2.length) {
  results.push(arr2[j]);
  j++;
 }
 return results;
};

module.exports = {
 mergeFunction,
};
