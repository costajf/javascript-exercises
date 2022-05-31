const sumAll = function(intOne, intTwo) {
    let result = 0;
    if (intOne < 0 || intTwo < 0) {
        return "ERROR";
    } else if (typeof(intOne) !== 'number' || typeof(intTwo) !== 'number') {
        return "ERROR";
    } else if (intOne < intTwo) {
        for (let i = intOne-1; i < (intTwo); i++) {
            result = result + (i + 1);
        }
        return result;
    } else {
        for (let i = intTwo-1; i < (intOne); i++) {
            result = result + (i + 1);
        }
        return result;
    } 
};

// Do not edit below this line
module.exports = sumAll;
