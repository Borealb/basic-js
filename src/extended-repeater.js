const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
//
//module.exports = function repeater(str, options) {
//  
//  let base = {
//    repeatTimes = 1,
//    additionRepeatTimes = 1,
//    separator = '+',
//    additionSeparator = '|',
//  }
//  if (typeof(str) !== 'string' || typeof(addition) !== 'string') {
//    str = str.toString();
//    addition = addition.toString();
//  }
//  
//};
//  