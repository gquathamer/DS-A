function solution(matrix) {
 // input will be a matrix which is an array of arrays
 // can we assume that each row in the matrix will be the same length?
 // if not do rooms that extend beyond count as haunted or not haunted?
 // output will be a single interger value, summing up the total "cost" of not haunted rooms
 // take the first row of the matrix and store in a variable all of the indexes that have a value of 0
 // store those in a duplicate / comparison array
 // create a variable that will store the rent value by summing values up
 // then move to the next row
 // if comparison array contains a zero at index don't add, otherwise add
 // repeat until the end of the array
 // return final value
 const comparisonArray = [];
 let rent = 0;
 for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
   if (i === 0) {
    comparisonArray.push(matrix[i][j]);
    rent += matrix[i][j];
   }
   if (matrix[i][j] <= 0 && i > 0) {
    comparisonArray[j] = 0;
   }
   if (matrix[i][j] > 0 && comparisonArray[j] > 0 && i > 0) {
    rent += matrix[i][j];
   }
  }
 }
 return rent;
}

solution([
 [0, 1, 1, 2],
 [0, 5, 0, 0],
 [2, 0, 3, 3],
]);
