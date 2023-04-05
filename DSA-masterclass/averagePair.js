function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
    // given a sorted array of integers
    // given a target value
    // find if there's a air of integers thats average is the target
    // possibly more than one pair
    // return boolean
    // multiple pointers
    // create 2 pointers one for beggining and one for end
    // check if the sum / 2 is = target
    // if that value is greater than target decrement end
    // if that value is less than target increment start
    // if that value is equal to target return true
    // if nothing ever returns true, return false
    // while condition start < end
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const average = (arr[start] + arr[end]) / 2;
        if (average === target) {
            return true;
        } else if (average > target) {
            end--;
        } else {
            start++;
        }
    }
    return false;
}

averagePair([],4)