const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  const resultArr = [...arr];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i+1 >= arr.length) {
        resultArr.splice(i, 1);
        continue
      }
      resultArr.splice(i+1, 1);
      resultArr.splice(i, 1);
    }
    if (arr[i] === '--discard-prev') {
      if (i-1 < 0) {
        resultArr.splice(i, 1);
        continue
      }
      if (arr[i-2] === '--discard-next') {
        resultArr.splice(i-2, 1);
        continue
      }
      resultArr.splice(i, 1);
      resultArr.splice(i-1, 1);
    }
    if (arr[i] === '--double-next') {
      if (i+1 >= arr.length) {
        resultArr.splice(i, 1);
        continue
      }      
      resultArr.splice(i+1, 0, arr[i+1]);
      resultArr.splice(i, 1);
    }
    if (arr[i] === '--double-prev') {
      if (i-1 < 0) {
        resultArr.splice(i, 1);
        continue
      }
      if (arr[i-2] === '--discard-next') {
        resultArr.splice(i-2, 1);
        continue
      }
      resultArr.splice(i, 1);
      resultArr.splice(i-1, 0, arr[i-1]);
    }
  }
  return resultArr;
};
