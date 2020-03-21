// Runtime: 76 ms, faster than 35.52% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 36 MB, less than 66.67% of JavaScript online submissions for Reverse Bits.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // convert to decimal to bits
  let binary = n.toString(2).toString();
  // calculate number of missing leading zeros
  let leadingZeros = 32 - binary.length;
  
  // concat leading zeros
  for (let i=0; i < leadingZeros; i++) {
    binary = '0' + binary;
  }
  
  // reverse bits
  binary = binary.split('').reverse().join('');
  
  // convert to decimal
  return parseInt(binary, 2);
};
