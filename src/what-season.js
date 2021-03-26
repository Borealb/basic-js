const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime()
  }
  catch(err) {
    throw new Error(err);
  }
  const season = date.getMonth();
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  if (winter.indexOf(season) !== -1){
    return 'winter';
    } else if (spring.indexOf(season) !== -1) {
    return 'spring';
    } else if (summer.indexOf(season) !== -1) {
    return 'summer';
    } else if (autumn.indexOf(season) !== -1) {
    return 'autumn';
    } 
};
