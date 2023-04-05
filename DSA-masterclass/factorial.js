//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(number){
    // return the factorial of a passed in value
    // base condition is number === 1 then return 1
    // manipulation is subtractin number by 1 each iteration
    if (number === 1) return 1;
    return number * factorial(number - 1);
}

factorial(2);