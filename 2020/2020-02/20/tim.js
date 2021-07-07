// Runtime: 140 ms, faster than 80.26% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.9 MB, less than 51.06% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let ret = 0;
  
  for (let idx=0; idx < s.length; idx++){
    let char = s[idx];
    let next_char = s[idx+1] || null;

    if (char === 'I') {
      if (next_char === 'V') {
        ret += 4;
        idx++;
      } else if (next_char === 'X') {
        ret += 9;
        idx++;
      } else {
        ret += 1;
      }
    } else if (char === 'V') {
      ret += 5;
    } else if (char === 'X') {
      if (next_char === 'L') {
        ret += 40;
        idx++;
      } else if (next_char === 'C') {
        ret += 90;
        idx++;
      } else {
        ret += 10;
      }
    } else if (char === 'L') {
      ret += 50;
    } else if (char === 'C') {
      if (next_char === 'D') {
        ret += 400;
        idx++;
      } else if (next_char === 'M') {
        ret += 900;
        idx++;
      } else {
        ret += 100;
      }
    } else if (char === 'D') {
      ret += 500;
    } else if (char === 'M') {
      ret += 1000;
    }
  }
  
  return ret;
};
