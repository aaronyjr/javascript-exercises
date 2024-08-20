const sumAll = function(num1, num2) {
    let res = 0;

    if (num1 <= 0 || num2 <= 0
        || !Number.isInteger(num1) || !Number.isInteger(num2)) {
            return "ERROR"
        }
    
    for (let i = Math.min(num1,num2); 
    i <= Math.max(num1,num2); i++) {
        res += i
    }

    return res
};

// Do not edit below this line
module.exports = sumAll;
