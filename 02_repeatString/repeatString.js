const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let index = 0; index < times; index++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
