/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const charCounts = {};
  for (let char of t) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  let required = Object.keys(charCounts).length;

  let l = 0,
    r = 0;

  let formed = 0;

  let ans = [Infinity, null, null];

  while (r < s.length) {
    let char = s[r];

    if (char in charCounts) {
      charCounts[char]--;
      if (charCounts[char] === 0) formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];

      if (r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }

      if (char in charCounts) {
        charCounts[char]++;
        if (charCounts[char] > 0) formed--;
      }

      l++;
    }

    r++;
  }

  return ans[0] === Infinity ? "" : s.slice(ans[1], ans[2] + 1);
};
