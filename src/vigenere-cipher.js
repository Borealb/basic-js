const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

//class VigenereCipheringMachine {
//  constructor(direct) {
//    if (direct === true || direct === undefined) {
//      this.needReverse = true;
//    } else (direct === false) {
//      this.needReverse = false;
//    }
//  }
//
//  encrypt(message, key) {
//    if (message === undefined || key === undefined) {
//      throw new Error();
//    }
//    if (this.needReverse === false) {
//      return message.toUpperCase().reverse()
//    }
//  }    
//  decrypt(encryptedMessage, key) {
//    if (encryptedMessage === '' || key === '') {
//      throw new Error();
//    }
//
//  }
//}
