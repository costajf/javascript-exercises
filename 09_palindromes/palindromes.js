const palindromes = function (words) {
    words = words.toLowerCase();
    words = words.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
    let backwards = words.split("").reverse().join("");
    console.log(backwards);
    if (backwards == words) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
