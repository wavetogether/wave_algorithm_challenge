# Runtime: 48 ms, faster than 71.92% of Python online submissions for Rotate Array.
# Memory Usage: 12.2 MB, less than 52.08% of Python online submissions for Rotate Array.
class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        nums[:len(nums) - k] = reversed(nums[:len(nums) - k])
        nums[len(nums) - k:] = reversed(nums[len(nums) - k:])
        nums.reverse()
