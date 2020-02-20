# Runtime: 40 ms, faster than 66.72% of Python online submissions for Roman to Integer.
# Memory Usage: 11.9 MB, less than 9.68% of Python online submissions for Roman to Integer.

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        m = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        return sum(-m[c] if m[s[i]] < m[s[i + 1]] else m[c] for i, c in enumerate(s[:-1])) + m[s[-1]]
