# Runtime: 116 ms, faster than 75.25% of Python online submissions for Missing Number.
# Memory Usage: 12.5 MB, less than 91.23% of Python online submissions for Missing Number.

class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return (len(nums) * (len(nums) + 1)) / 2 - sum(nums)
