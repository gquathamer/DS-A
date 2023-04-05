function isSubsequence(string1, string2) {
 // good luck. Add any arguments you deem necessary.
 // takes 2 strings
 // checks whether the characters in the first string
 // are in the same order in the second string
 // letters and spaces in between don't matter, order does
 // create 1 pointer that starts with string 1 char 1
 // loop over second string
 // check if current char is equal to pointer
 // if not continue loop until match is found
 // if match is found increment pointer to look at next char in string 1
 // continue
 // 'abc', 'acb'
 let stringOneChar = 0;
 for (const char of string2) {
  if (char === string1[stringOneChar]) {
   stringOneChar++;
  }
  if (stringOneChar >= string1.length) {
   return true;
  }
 }
 return false;
}

isSubsequence('abc', 'acb');
