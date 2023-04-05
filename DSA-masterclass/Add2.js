function addUpTo(n) {
    return n * (n + 1) / 2
}

const t1 = performance.now();
console.log(addUpTo(1000000000));
const t2 = performance.now();
console.log(`That operation took ${(t2 - t1) / 1000} seconds`);