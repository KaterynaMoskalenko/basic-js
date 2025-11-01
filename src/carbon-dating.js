const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Remove line below and write your code here
  if (typeof sampleActivity !== 'string') return false;
  
  let age = parseFloat(sampleActivity);
  if (isNaN(age) || age <= 0 || age >= MODERN_ACTIVITY) {
  return false;
  }
    const t = Math.log(MODERN_ACTIVITY / age) / (Math.LN2 / HALF_LIFE_PERIOD);
    return Math.ceil(t);

}

module.exports = {
  dateSample
};
