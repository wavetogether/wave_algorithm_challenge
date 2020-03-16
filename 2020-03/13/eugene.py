# Runtime: 16 ms, faster than 69.51% of Python online submissions for Nim Game.
# Memory Usage: 11.8 MB, less than 9.09% of Python online submissions for Nim Game.

class Solution(object):
    def canWinNim(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n % 4 == 0:
            return False
        return True

