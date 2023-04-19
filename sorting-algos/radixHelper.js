export function getDigit(num, place) {
 // return the number at place
 return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

export function digitCount(num) {
 // return the number of digits in a given num
 if (num === 0) return 1;
 return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(arr) {
 // find the number with most digits in an array and return that value
 let maxDigits = 0;
 for (let i = 0; i < arr.length; i++) {
  maxDigits = Math.max(maxDigits, digitCount(arr[i]));
 }
 return maxDigits;
}
