const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let options = {
    repeatTimes (n) {
      this.str.repeat(n)
      return this;
    },
    separator (s = '+') {
      this.str.concat(s)
      return this;
    },
    addition (ad) {
      this.repeatTimes.concat(ad)
      return this;
    },
    additionRepeatTimes (aRT) {
      this.addition.repeat(aRT)
      return this;
    },
    additionSeparator (aS = '|') {
      this.addition.concat(aS)
      return this;
    }
  }
};
  