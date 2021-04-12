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
  const str = String(n);
  let arr = str.slice();
  let res = 0;
  arr = arr.split('');
  for (let i = 0; i < arr.length; i++) {
    let x = arr.slice();
    x.splice(i, 1);
    x = x.join('');
    if (Number(x) > res) {
      res = Number(x);
    }
  }
  return res;
}

module.exports = deleteDigit;
