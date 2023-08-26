const palindromes = function (str) {

    revStr = ""

    for (i = 0; i < str.length(); i++) {
        revStr = str + revStr;
    }

    if (revStr === str) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
