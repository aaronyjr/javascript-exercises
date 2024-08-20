const removeFromArray = function(input, ...elementToRemove) {
    const res = [];

    input.forEach(element => {
        if (!elementToRemove.includes(element)) {
            res.push(element)
        }
    });

    return res
};

// Do not edit below this line
module.exports = removeFromArray;
