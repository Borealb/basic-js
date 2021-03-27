const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
     this.chain.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if (this.getLength < position || 
      typeof(position) !== 'number' || 
      position === 0 || 
      position === 'null' || 
      position < 0 || 
      position % 1 !== 0) {
      this.chain = [];
      throw new Error();
    } else if (typeof(position) === 'number') {
      this.chain.splice(position - 1,1);
    } return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};
module.exports = chainMaker;
