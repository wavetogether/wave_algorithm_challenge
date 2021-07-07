# Runtime: 68 ms, faster than 83.44% of Python online submissions for Single Number.
# Memory Usage: 13.7 MB, less than 45.94% of Python online submissions for Single Number.

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return reduce(lambda x, y: x ^ y, nums)
