function validAnagram(string1, string2){
  // add whatever parameters you deem necessary - good luck!
// can assume that inputs are single words, no spaces or punctuations
// check if both strings are of the same length and return null if they aren'they
    if (string1.length !== string2.length) {
        return false;
    }
// create 2 objects, one to count the frequency of letters in the first strings
// create the other object to count the frequency of letters in the second strings
    const object1 = {}
    const object2 = {}
// now loop over the first string and for each occurrence of a letter create a key and initialize the value to 1 or add object1
    for (const char in string1) {
        const letter = string1[char];
        object1[letter] ? object1[letter]++ : object1[letter] = 1;
    }
// now we can loop over the second string and do the same thing as above
    for (const char in string2) {
        const letter = string2[char];
        object2[letter] ? object2[letter]++ : object2[letter] = 1;
    }

    console.log(object1, object2);

// loop over object1 and check that object2 contains a key for the character we're on in the loop, then also check that the values are the same
    for (const key in object1) {
        // check object2 for the key
        if (!object2[key]) {
            return false;
        }
        // check that the value in object1 is the same as the value in object2
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    // for example, is a: 3 the same in both objects
    // return a boolean true if a valid anagram is found
    return true;
}

console.log(validAnagram("rat","car"))