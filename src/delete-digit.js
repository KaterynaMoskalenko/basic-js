const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let nInArr = String(n).split('');
  let newArr = [];
  for (let i = 0; i < nInArr.length; i++) {
    let tempArr = [...nInArr];
     delete tempArr[i];
   newArr[i] = tempArr.join('').trim();
  
  }
  const maxNum =  newArr.reduce((acc, current) => {
   return current > acc ? current : acc;
  }, newArr[0]);
  return +maxNum;
}

module.exports = {
  deleteDigit
};
