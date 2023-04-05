function sameFrequency(first, second){
  // good luck. Add any arguments you deem necessary.
    // given 2 positive integers check if they have the same frequency of digits
    // are numbers iterable? I believe we can iterate over those with a loop
    // create 2 empty objects meant to store each unique digit, and frequency
    if (first <= 0 || second <= 0) {
        return false;
    }
    const firstDigitFrequencies = {};
    // loop over first number and for each unique integer, increment or initialize
        // a count
    const iterableFirstInteger = first.toString();
    const iterableSecondInteger = second.toString();
    // loop over first string and create an object that counts frequencies of digits
    // loop over second string and decrement integer frequencies in ref object
    // if anything drops below 0 or stays above 0 then return false
    for (const char of iterableFirstInteger) {
        firstDigitFrequencies[char] ? firstDigitFrequencies[char]++ : firstDigitFrequencies[char] = 1
    }

    for (const char of iterableSecondInteger) {
        if (!firstDigitFrequencies[char]) {
            return false;
        } else {
            firstDigitFrequencies[char]--
        }
    }

    for (const prop in firstDigitFrequencies) {
        if (firstDigitFrequencies[prop] !== 0) {
            return false;
        }
    } 

    return true;
    
    // do the same for the second number
    
    // check the first number and build an object that tracks the frequency of digits
    // check the second number and build an object that tracks the frequency of digits
    // compare the 2 objects and either return true or false
    
}

console.log(sameFrequency(123456789, 987654321));
