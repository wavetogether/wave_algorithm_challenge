/**
 * Success
 * Runtime: 168 ms, faster than 43.96% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
 * Memory Usage: 41 MB, less than 71.13% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
 */

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABETS = ALPHABET.split('');
const makeAlphabetCount = () => {
  const alphabetCount = {};
  for (let i=0; i<ALPHABETS.length; i++) {
    alphabetCount[ALPHABETS[i]] = 0;
  }
  return alphabetCount;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) {
  const countOfS = makeAlphabetCount();
  for (let i=0; i<s.length; i++) {
    countOfS[s[i]]++;
  }
  const countOfT = makeAlphabetCount();
  for (let i=0; i<t.length; i++) {
    countOfT[t[i]]++;
  }
  let diffsCount = 0;
  for (let i=0; i<ALPHABET.length; i++) {
    const sub = countOfT[ALPHABET[i]] - countOfS[ALPHABET[i]];
    const diff = sub > 0 ? sub : 0;
    diffsCount += diff;
  }
  return diffsCount;
};