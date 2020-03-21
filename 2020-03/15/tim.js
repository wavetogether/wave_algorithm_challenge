// Runtime: 72 ms, faster than 57.14% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 35.8 MB, less than 83.33% of JavaScript online submissions for Reverse Bits.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const bin = n.toString(2);
  return parseInt(('0'.repeat(32 - bin.length) + bin).split('').reverse().join(''), 2);
};
