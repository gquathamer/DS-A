import pivotHelper from './quickSortPivotHelper.js';

export default function quickSort(arr, left = 0, right = arr.length - 1) {
 if (left < right) {
  let pivotIndex = pivotHelper(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
 }
 return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
