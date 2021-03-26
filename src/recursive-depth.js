const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
      return Math.max(a, calculateDepth(b));
    }, 0) 
    : 0;
  } 
};

//if (Array.isArray(arr)) {
//  return 1 + Math.max(...arr.map(t => this.calculateDepth(t)))
//  }
//  else return 0;