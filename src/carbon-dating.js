const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; //N0
const HALF_LIFE_PERIOD= 5730; //

module.exports = function dateSample(sampleActivity) {
  const k = 0.693/HALF_LIFE_PERIOD;
  const result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  if (sampleActivity && typeof(sampleActivity) === 'string' && typeof(+sampleActivity) === 'number' && +sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY) {
  return result;
};
  return (false);
};
