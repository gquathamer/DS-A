function reverse(string) {
 // recursively call the string until you reach the end
 // then return the last letter += the previous recursively call
 if (string === '') {
  return string;
 }
 return string.slice(-1) + reverse(string.slice(0, string.length - 1));
}

reverse('string');
