/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const uniqueLetters = [];
  const duplicates = [];
  for (let i=0; i<s.length; i++) {
    const letter = s[i];
    if (uniqueLetters.indexOf(letter) < 0) {
      uniqueLetters.push(letter);
    } else {
      duplicates.push(letter);
    }
  }
  for (let i=0; i<uniqueLetters.length; i++) {
    const uniqueLetter = uniqueLetters[i];
    if (duplicates.indexOf(uniqueLetter) < 0) return s.indexOf(uniqueLetter);
  }
  return -1;
};
