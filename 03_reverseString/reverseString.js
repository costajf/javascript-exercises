const reverseString = function(string) {
    let stringList = string.split("");
    let reversed = stringList.reverse();
    let result = reversed.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
