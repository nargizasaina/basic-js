const { NotImplementedError } = require('../extensions/index.js');

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
  if (!date) return 'Unable to determine the time of year!';

  try {
    // if (!(Object.getOwnPropertyNames(date).toDateString())){
    //   throw new Error('Invalid date!');
    // }

    let data = new Date(date);
    let month = data.getMonth();
    switch (month) {
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'fall';
      case 1:
      case 11:
      case 0:
        return 'winter';
    }
    // console.log(data.getMonth(), 'data');
    // return 
  }catch (e) {
    console.log(e);
    return e;
  }
  // console.log(date.toDateString(), 1);
}

// console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500)));
// console.log(getSeason('foo'));

module.exports = {
  getSeason
};
