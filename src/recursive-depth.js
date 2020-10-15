const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    
    let depth = 1;
    
    for (let i = 0; i < arr.length; i++) {
      let currentDepth = 1;
      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
        if (currentDepth > depth) depth = currentDepth;
      };
    };
    return depth;
  };
};