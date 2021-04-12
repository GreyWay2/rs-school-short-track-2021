/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  const res = [];
  for (let k = 0; k < m[0].length; k++) {
    for (let i = 0; i < m.length; i++) {
      if (m[i][k] !== 0) {
        res.push(m[i][k]);
      } else break;
    }
  }
  return res.reduce((sum, current) => sum + current, 0);
}
module.exports = getMatrixElementsSum;
