// Runtime: 224 ms, faster than 52.54% of JavaScript online submissions for Power of Three.
// Memory Usage: 47.9 MB, less than 60.00% of JavaScript online submissions for Power of Three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let cnt = 0;

  if (n == 0) {
    return false;
  }
  
  while (true) {
    if (n ===1) {
      return true;
    }
    if (n % 3 !== 0) {
      return false;
    }
    n = n/3;
  }
};
