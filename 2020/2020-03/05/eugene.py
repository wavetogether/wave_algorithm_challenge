# Runtime: 72 ms, faster than 74.00% of Python online submissions for Jump Game.
# Memory Usage: 13.4 MB, less than 14.29% of Python online submissions for Jump Game.

class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        reach_index = 0
        for i in range(len(nums)):
            if reach_index >= len(nums) - 1:
                return True
            reach_index = max(nums[i] + i, reach_index)
            if reach_index <= i:
                return False
        return False
