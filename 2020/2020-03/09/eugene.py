# Runtime: 56 ms, faster than 52.68% of Python online submissions for Palindrome Number.
# Memory Usage: 11.7 MB, less than 72.29% of Python online submissions for Palindrome Number.

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        return str(x) == str(x)[::-1]