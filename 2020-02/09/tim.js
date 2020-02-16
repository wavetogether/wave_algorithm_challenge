// Runtime: 324 ms, faster than 5.02% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 67.2 MB, less than 5.00% of JavaScript online submissions for First Unique Character in a String.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let ret = 0;
  
  let appeared = {};
  
  for (let idx in s) {
    if (!appeared[s[idx]]) {
      appeared[s[idx]] = 1;
    } else {
      appeared[s[idx]]++;
    }
  }
  
  for (let idx in s) {
    if (appeared[s[idx]] === 1) {
      return idx;
    }
  }
  return -1;
};
