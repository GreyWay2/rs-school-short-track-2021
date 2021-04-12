/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let k;
  for (let i = 0; i < arr.length; i++) {
    k = i + 1;
    while (arr[i] === arr[k]) {
      k++;
    }
    if ((k - i) > 1) {
      arr.splice(i, 0, (k - i));
      arr.splice(i + 2, k - i - 1);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
