# Runtime: 40 ms, faster than 63.81% of Python online submissions for Valid Palindrome.
# Memory Usage: 13.8 MB, less than 43.14% of Python online submissions for Valid Palindrome.

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        t = ''.join(c.lower() for c in s if c.isalnum())
        return t == t[::-1]
