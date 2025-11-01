const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
    let arrayOfS1 = s1.split('');
  let arrayOfS2 = s2.split('');
  
  const myMap1 = new Map();
  const myMap2 = new Map();

 for (let char of arrayOfS1) {
  myMap1.set(char, (myMap1.get(char) || 0) + 1);  
 }
for (let char of arrayOfS2) {
  myMap2.set(char, (myMap2.get(char) || 0) + 1);
}

  let commonCount = 0;

for (let [char, count1] of myMap1.entries()) {
  if (myMap2.has(char)) {
    let count2 = myMap2.get(char)
    commonCount += Math.min(count1, count2)
  }
}
   return  commonCount;
}

module.exports = {
  getCommonCharacterCount
};
