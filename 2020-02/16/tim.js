// Runtime: 96 ms, faster than 41.67% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 40.7 MB, less than 6.12% of JavaScript online submissions for Valid Anagram.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_arr = s.split(''), t_arr = t.split('');
  
  s_arr.sort();
  t_arr.sort();
  
  let s_str = s_arr.toString();
  let t_str = t_arr.toString();
  
  if (s_str !== t_str) {
    return false;
  } else {
    return true;  
  }
};
