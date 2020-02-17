// Runtime: 64 ms, faster than 92.15% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 45.2 MB, less than 6.12% of JavaScript online submissions for Valid Anagram.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    if (s.charAt(0) == '') return true;
    const s1 = s.split(s.charAt(0));
    const t1 = t.split(s.charAt(0));
    if (s1.length !== t1.length) return false;
    return isAnagram(
        s1.reduce((acc, val) => acc + val),
        t1.reduce((acc, val) => acc + val)
    );
};
