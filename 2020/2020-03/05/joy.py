class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        last_index = len(nums)-1
        for i in reversed(range(len(nums))):
            if i + nums[i] >= last_index:
                last_index = i
        return last_index == 0
