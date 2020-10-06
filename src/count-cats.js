const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = matrix.reduce((r, e) => r.concat(e), []);
  let result = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === '^^') {
      result++;
    };
  };
  return result;
};
