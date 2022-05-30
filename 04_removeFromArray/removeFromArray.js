const removeFromArray = function(...args) {
    const myArray = args[0];
    const newArray = [];
    myArray.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
