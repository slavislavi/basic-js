const CustomError = require("../extensions/custom-error");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(direct = 1) {
    this.direct = direct;
  };
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('ERROR!');
    let result = [];
    let iterator = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        iterator++;
        let index = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[iterator % key.length].toUpperCase())) % alphabet.length;
        result.push(alphabet[index]);
      } else {
      result.push(message[i]);
      };
    };
    if (this.direct) {
      return result.join('');
    } else {
      return result.reverse().join('');
    };
  };

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('ERROR!');
    let result = [];
    let iterator = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        iterator++;
        let index = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.length - alphabet.indexOf(key[iterator % key.length].toUpperCase())) % alphabet.length;
        result.push(alphabet[index]);
      } else {
      result.push(message[i]);
      };
    };
    if (this.direct) {
      return result.join('');
    } else {
      return result.reverse().join('');
    };
  };
};

module.exports = VigenereCipheringMachine;
