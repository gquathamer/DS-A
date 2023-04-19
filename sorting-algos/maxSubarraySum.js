function maxSubarraySum(arr, num) {
 // add whatever parameters you deem necessary - good luck!
 // will receive an array and a single integer
 // need to find max sum of x numbers in array
 // needs to be consecutive numbers

 // create a small loop that loops over x number of elements and sums
 // store that value in a variable
 if (num > arr.length) return null;
 let maxValue = 0;
 for (let i = 0; i < num; i++) {
  maxValue += arr[i];
 }
 // start looping over the array again starting at x + 1
 // each loop iteration we need to add x + 1 to stored value
 // subtract x - 1
 let tempValue = maxValue;
 for (let i = num; i < arr.length; i++) {
  tempValue += arr[i];
  tempValue -= arr[i - num];
  maxValue = Math.max(tempValue, maxValue);
 }
 return maxValue;
}

maxSubarraySum([2, 3], 2);
