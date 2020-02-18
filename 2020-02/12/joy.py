class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        curr_sum = 0
        for i, e in enumerate(nums):
            if e <= curr_sum + e:
                curr_sum += e
            else:
                curr_sum = e
            if curr_sum > max_sum:
                max_sum = curr_sum
            
        return max_sum
