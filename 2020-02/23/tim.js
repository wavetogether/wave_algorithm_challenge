// Runtime: 52 ms, faster than 99.92% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 37.2 MB, less than 65.22% of JavaScript online submissions for Valid Palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  
  const length = s.length;
  
  for (let i = 0; i < length/2; i++) {
    if (s[i] != s[length-1-i]) {
      return false
    }
  }
  return true;

};
