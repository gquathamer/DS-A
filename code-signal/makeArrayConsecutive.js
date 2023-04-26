function solution(statues) {
 // inputs are non negative integers
 // output is an integer
 // sort the array from smallest to largest
 // create 2 pointers, always 1 element apart
 // check the difference between the 2 pointers
 // if 1 move on
 // if > 1, take difference, subtract by 1, add to a counter variable
 // return the counter variable
 // [ 2, 3, 6, 8]
 //         _  _

 statues.sort((a, b) => a - b);
 let minimum = 0;
 for (let i = 0, j = i + 1; i < statues.length - 1; i++, j++) {
  let difference = statues[j] - statues[i];
  if (difference > 1) {
   minimum += difference - 1;
  }
 }
 return minimum;
}

solution([6, 2, 3, 8]);
