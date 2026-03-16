/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const memo = new Map();

  function helper(sIndex, pIndex) {
    const key = `${sIndex},${pIndex}`;
    if (memo.has(key)) return memo.get(key);

    if (pIndex === p.length) return sIndex === s.length;

    const firstMatch = sIndex < s.length && (s[sIndex] === p[pIndex] || p[pIndex] === ".");

    let result;
    if (pIndex + 1 < p.length && p[pIndex + 1] === "*") {
      result = helper(sIndex, pIndex + 2) || (firstMatch && helper(sIndex + 1, pIndex));
    } else {
      result = firstMatch && helper(sIndex + 1, pIndex + 1);
    }

    memo.set(key, result);
    return result;
  }

  return helper(0, 0);
};
