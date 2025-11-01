const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catEar = '^^';
  let count = 0;
  for (let i = 0; i<= matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      matrix[i].forEach(element => {
        (element === catEar) ? count++ : count;        
      });
    }  
  }
  return count;   
  
}

module.exports = {
  countCats
};
