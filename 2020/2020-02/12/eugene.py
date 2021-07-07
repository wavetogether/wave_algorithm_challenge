# Runtime: 52 ms, faster than 64.70% of Python online submissions for Maximum Subarray.
# Memory Usage: 12.4 MB, less than 41.02% of Python online submissions for Maximum Subarray.

class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        largest_sum = subarray_sum = nums[0]
        for num in nums[1:]:
            subarray_sum = max(num, subarray_sum + num)
            largest_sum = max(largest_sum, subarray_sum)
        return largest_sum
