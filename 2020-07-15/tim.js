// Runtime: 236 ms, faster than 29.12% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// Memory Usage: 43.6 MB, less than 22.68% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.

var minSteps = function(s, t) {
  let map1 = wordToMap(s);
  let map2 = wordToMap(t);

  return getMissingLetters(map1, map2);

};

const wordToMap = (word) => {
  const map = {};

  let arr = word.split('');

  arr.forEach(letter => {
    if (map[letter]) {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  });

  return map;
};

const getMissingLetters = (map1, map2) => {
  const letters = Object.keys(map1);

  let ret = 0;

  letters.forEach((letter) => {
    if (map2[letter]) {
      if (map1[letter] > map2[letter]) {
        ret += map1[letter] - map2[letter];
      }
    } else {
      ret += map1[letter];
    }
  });
  
  return ret;
};
