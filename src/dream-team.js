const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false;
  let teamName = members.filter(e => typeof(e) === 'string').map((item) => {
    if (item.trim().charAt(0)) {
      return item.trim().charAt(0).toUpperCase();
    }
    else if (item === '') {
      return null;
    }
    else if (item === Number) {
      return false;
    }
  }).sort().join('');
  return teamName;
};
