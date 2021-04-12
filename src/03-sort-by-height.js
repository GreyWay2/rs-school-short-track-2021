/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      numbers.push(i);
    }
    res.push(arr[i]);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === -1) {
      res.splice(i, 1);
      i--;
    }
  }
  res.sort((a, b) => (a - b));
  for (let j = 0; j < numbers.length; j++) {
    res.splice(numbers[j], 0, -1);
  }
  return res;
}

module.exports = sortByHeight;
