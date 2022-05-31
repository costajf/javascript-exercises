const ftoc = function(faren) {
  let celsius = (faren - 32) * (5 / 9);
  return +celsius.toFixed(1);
};

const ctof = function(cels) {
  let farenheit =  (cels * (9/5)) + 32;
  return +farenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
