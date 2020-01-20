/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { 
  if (strs.length == 0) {
    return '';
  }
  
  for (let i=0; i < strs[0].length; i++) { //iterate all chars of first word
    let char = strs[0][i];
    
    for (let j=0; j < strs.length; j++) { //iterate all input words
      if (strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};
