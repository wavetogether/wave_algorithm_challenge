# Runtime: 8 ms, faster than 99.06% of Python online submissions for Length of Last Word.
# Memory Usage: 12 MB, less than 10.71% of Python online submissions for Length of Last Word.

class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.rstrip()
        for i in range(len(s)):
            if s[len(s) - i - 1] == ' ':
                return i
        return len(s)
