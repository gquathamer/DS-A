// loop over longer string
// loop over shorter sub string
// if characters don't match break loop
// if you hit the end of short string you found a match
// if you find a match increment the count
// returning the count of sub strings in that larger string

function subString(string, subString) {
 let count = 0;

 for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < subString.length; j++) {
   if (string[i + j] !== subString[j]) {
    break;
   }
   if (j === subString.length - 1) {
    count++;
   }
  }
 }

 return count;
}

subString('lorie loled', 'lol');
