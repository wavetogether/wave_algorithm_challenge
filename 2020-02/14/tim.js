// Runtime: 64 ms, faster than 34.47% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 39.9 MB, less than 6.67% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [];
  let val= '';
  
  for (let char of s) {
    
    if (['(', '[', '{'].includes(char)) {
      arr.push(char);
    } else {

      if (arr.length === 0) {
    	return false;
      }

	  const length = arr.length;
	  const val = arr[length - 1];

	  arr = arr.slice(0, length - 1); 
	  
      switch (char) {
        case ')': 
          if (val !== '(') {
            return false;
          }
          break;
        case ']': 
          if (val !== '[') {
            return false;
          }
          break;
        case '}': 
          if (val !== '{') {
            return false;
          }
          break;
      }
    }
  }
  
  if (arr.length !== 0) {
    return false;    
  } else {
    return true;  
  }
};
