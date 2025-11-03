const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    const season = {
    winter : [1,2,12],
    spring: [3,4,5],
    summer: [6,7,8],
    autumn: [9,10,11]
  }
  if (date === undefined) {
     return 'Unable to determine the time of year!'; 
  }
  
  try {
    if (
      !(date instanceof Date) || 
      Object.prototype.toString.call(date) !== '[object Date]' ||
      typeof date.getMonth !== 'function' ||
      typeof date.getTime !== 'function' ||
    
      isNaN(date.getTime())
    ) {
        throw new Error();
      }
        
      date.toString();
      } catch {
        throw new Error('Invalid date!');
      }
  

    let month = date.getMonth() + 1;
    for (const [key, months]  of Object.entries(season)) {
      if ((season[key].includes(month))) {
        return key;
      };
    };
  }; 
  


module.exports = {
  getSeason
};
