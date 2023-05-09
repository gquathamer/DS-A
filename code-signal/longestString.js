function solution(inputArray) {
 'use strict';
 let maxSize = Math.max(...inputArray.map(x => x.length));
 return inputArray.filter(x => x.length === maxSize);
}

solution(['aba', 'aa', 'ad', 'vcd', 'aba']);
