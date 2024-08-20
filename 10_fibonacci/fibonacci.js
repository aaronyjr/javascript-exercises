const fibonacci = function(n) {
    if (+n < 0) {
        return "OOPS"
    }

    let prev = 0;
    let curr = 1;
    let next = 0;

    for (let i = 0; i < n; i++) {
        next = prev + curr;
        prev = curr
        curr = next;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;

// 0 1 1 2 3 5