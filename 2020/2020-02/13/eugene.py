# Runtime: 40 ms, faster than 100.00% of Python online submissions for Power of Three.
# Memory Usage: 11.8 MB, less than 23.81% of Python online submissions for Power of Three.

class Solution(object):
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        # while n != 0 and n % 3 == 0:
        #     n /= 3
        # return n == 1

        return n > 0 and 3 ** 30 % n == 0
