function solution(year) {
 // get number length
 // length should be between 1 and 4
 // if length less than 4 take first nuber and subtract by 1
 // if length less than 4 and not divisible by 100
 // else take first 2 numbers and subtract by one
 const yearString = String(year);
 let century = 0;
 yearString.length < 4
  ? (century = Number(yearString.slice(0, 1)))
  : (century = Number(yearString.slice(0, 2)));
 if (year % 100 === 0) {
  return century;
 }
 century++;
 return century;
}

console.log(solution(1905));
