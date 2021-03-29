const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === true || direct === undefined) {
      this.needReverse = true;
    } else (direct === false) {
      this.needReverse = false;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    if (this.needReverse === false) {
      return message.toUpperCase().reverse()
    }
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === '' || key === '') {
      throw new Error();
    }

  }
}

module.exports = VigenereCipheringMachine;
