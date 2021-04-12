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
  const a1 = s1.split('');
  const a2 = s2.split('');
  let result = 0;
  a1.forEach((symbol) => {
    for (let i = 0; i < a2.length; i++) {
      if (symbol === a2[i]) {
        result++;
        a2.splice(i, 1);
        break;
      }
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
