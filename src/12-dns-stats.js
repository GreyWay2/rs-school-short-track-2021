/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(d) {
  const res = {};
  for (let i = 0; i < d.length; i++) {
    const keys = [];
    const arr = d[i].split('.').reverse();
    let el = '';
    for (let j = 0; j < arr.length; j++) {
      el += `.${arr[j]}`;
      keys.push(el);
    }
    for (let j = 0; j < keys.length; j++) {
      const dom = keys[j];
      if (res[dom]) {
        res[dom]++;
      } else {
        res[dom] = 1;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
