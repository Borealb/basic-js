const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain = [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
     this.chain.push(`'(${value})'`)
     return this;
  },
  removeLink(position) {
    if (typeof(position) === 'number') {
      this.chain.splice(`${position}`,1);
    } else if (typeof(position) !== 'number') {
      return ('Error')
    } else if (this.getLength < position) {
      return ('Error')
    } 
  },
  reverseChain() {
    
  },
  finishChain() {
    
  }
};

module.exports = chainMaker;
