class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        if len(nums) == 0:
            return []
        
        left = 0
        right = left + k if len(nums) >= k else len(nums)
        result = []
        while right <= len(nums):
            result.append(max(nums[left:right]))
            left += 1
            right += 1
        return result
