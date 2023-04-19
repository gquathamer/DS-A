function isPalindrome(string) {
 // add whatever parameters you deem necessary - good luck!
 if (string[0] !== string[string.length - 1]) {
  return false;
 }
 if (string.length <= 1) {
  return true;
 }
 return isPalindrome(string.slice(1, string.length - 1));
}

isPalindrome('amanaplanacanalpanama');
