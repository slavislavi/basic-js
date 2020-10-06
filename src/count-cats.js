const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = matrix.reduce((r, e) => r.concat(e), []);
  for (i = 0; i < array.length; i++) {
    let result = 0;
    if (array[i] === '^^') {
      result++;
    };
  };
  return result;
};
