const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position > this.chain.length - 1 || Number.isInteger(position) == false) {
      this.chain = [];
      throw new Error('Error!')
    };
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    for (let i = 0; i < this.chain.length; i++) {
      this.chain[i] = '( ' + this.chain[i] + ' )';
    };
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
