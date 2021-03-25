const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
let catAmount = 0;
for (let i=0; i < cats.length; i++) {
  for (let j = 0; j < cats[i].length; j++) {
    if (cats[i][j] === '^^') {
    catAmount++;
    }
  };
  };
  return catAmount;
};