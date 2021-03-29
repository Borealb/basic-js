const CustomError = require("../extensions/custom-error");

//module.exports = function repeater(/* str, options */) {
//  throw new CustomError('Not implemented');
//  // remove line with error and write your code here
//};
//
module.exports = function repeater(str, options) {
  
  let resultArr = [];
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;
  for (i=0; i < repeatTimes; i++) {
    resultArr.push(str);
  }
  
  function additions(str) {
    let resultAddition = [];
    for (j=0; j < additionRepeatTimes; j++) {
      resultAddition.push(options.addition === undefined ? '' : options.addition === null ? 'null' : options.addition);
    }
    return (str + resultAddition.join(options.additionSeparator || '|'));
  }
  return (resultArr.map(additions).join(options.separator || '+' ));
  };
  
  