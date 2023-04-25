function solution(inputArray) {
 // multiple pointers for 0 and 1 elems
 // initialize a var that will hold largestProduct
 // compare largest using math.max(largestProduct, new pointer product)
 // return the product
 let maxProduct = -Infinity;
 for (let i = 0, j = i + 1; i < inputArray.length; i++, j++) {
  maxProduct = Math.max(maxProduct, inputArray[i] * inputArray[j]);
 }
 return maxProduct;
}

solution([3, 6, -2, -5, 7, 3]);
