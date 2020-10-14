const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {  
  
 if (options.repeatTimes === undefined) {
   return str + options.addition;
 };
 if (options.separator !== undefined) {
    options.separator = String(options.separator);
  } else {
    options.separator = '+';
  };
 if (options.additionSeparator !== undefined) {
   options.additionSeparator = String(options.additionSeparator);
 } else {
  options.additionSeparator = '|';
 };

  let result = '';
  let addResult = '';

 for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
  addResult += options.addition + options.additionSeparator;
 };

 if (options.additionRepeatTimes > 0) {
   addResult += options.addition;
 }

 for (let i = 0; i < options.repeatTimes - 1; i++) {
  result += str + addResult + options.separator;
 };

 if (options.repeatTimes > 0) {
   result += str + addResult;
 };
 
 return result;
};
  