const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = [];
  for (let i = 0; i < members.length; i++) {
    if (members.forEach(typeof(members) == 'string')) {
     team.push(members.trim())
  };
};
  if(Array.isArray(members) === false) {
    return false;
  }
  return team.toUpperCase().split().sort().join('');
}
