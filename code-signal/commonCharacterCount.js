function solution(s1, s2) {
 // input is 2 strings
 // output an integer of common characters
 // spread each input into an object
 const s1CharCount = findFrequency(s1);
 const s2CharCount = findFrequency(s2);
 let commonCharacters = 0;
 for (let prop in s1CharCount) {
  if (s2CharCount[prop]) {
   commonCharacters += Math.min(s1CharCount[prop], s2CharCount[prop]);
  }
 }
 return commonCharacters;
}

function findFrequency(s) {
 const sCharCount = {};
 for (let i = 0; i < s.length; i++) {
  sCharCount[s[i]] ? sCharCount[s[i]]++ : (sCharCount[s[i]] = 1);
 }
 return sCharCount;
}

solution('abca', 'xyzbac');
