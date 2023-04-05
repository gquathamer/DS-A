// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// need to create a new array that holds actual values
// loop over the array
// if the element is an array recursively call array[0] until not an array
// push that value into the new array

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
    let newArr = [];
    for (elem of arr) {
        if (Array.isArray(elem)) {
            newArr = newArr.concat(flatten(elem));
        } else {
            newArr.push(elem);
        }
    }
    return newArr;
}


flatten([1, 2, 3, [4, 5] ]);