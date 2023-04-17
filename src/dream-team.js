const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) return false;
  let name = '';

  for (let i = 0; i < members.length; i ++) {
    if (typeof members[i] !== 'string') {
      members.splice(i, 1);
      --i;
    } else {
      members[i] = members[i].trim().toUpperCase();
    }
  }

  const sorte = members.sort();
  console.log(sorte);
  for (let i = 0; i < sorte.length; i++) {
      name = name + sorte[i][0];
  }

  return name;
}

module.exports = {
  createDreamTeam
};
