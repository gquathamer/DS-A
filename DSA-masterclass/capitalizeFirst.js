function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
    // input is an array of strings
    // create new empty array
    // loop over each element
    // capitalize the first letter
    // then slice the array
    // call again
    let newArr = [];
    if (arr.length === 1) {
        newArr.push(arr[0].charAt().toUpperCase() + arr[0].slice(1));
        return newArr;
    } else {
        newArr.push(arr[0].charAt().toUpperCase() + arr[0].slice(1));
        newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    }
    return newArr;
}


capitalizeFirst(['car','taco','banana'])