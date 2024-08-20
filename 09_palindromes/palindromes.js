const palindromes = function (str) {
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l].toLowerCase() != str[r].toLowerCase()) {
            return false;
        }
        l++
        r--
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
