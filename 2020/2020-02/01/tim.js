Runtime: 60 ms, faster than 99.36% of JavaScript online submissions for Reverse Integer.
Memory Usage: 36 MB, less than 22.92% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ret = '';
  let str = String(Math.abs(x));
  
  let trailingZero = false;
  
  if (str[str.length-1] === 0) {
    trailingZero = true;
  }
  
  for (let i=str.length-1; i>=0; i--) {
    if (str[i] === 0) {
      if (trailingZero === true) {
        
      } else {
        ret = ret + str[i];
      }
    }
    trailingZero = false;
    ret = ret + str[i];
  }
  
  if (Math.pow(2,31) < Number(ret)) {
    return 0;
  }
  
  if (x < 0) {
    ret = '-' + ret;
  }
  
  return ret;
};
