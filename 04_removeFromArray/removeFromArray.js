/**
 *
 * @param {any[]} array
 * @param  {...any} itemsToRemove
 */

const removeFromArray = function(array, ...itemsToRemove) {
  return array.filter((n) => !itemsToRemove.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
