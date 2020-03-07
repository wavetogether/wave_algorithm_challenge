# Runtime: 8 ms, faster than 99.52% of Python online submissions for Sort Colors.
# Memory Usage: 11.9 MB, less than 5.13% of Python online submissions for Sort Colors.

class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        i, j, k = 0, 0, len(nums) - 1
        while i <= k:
            if nums[i] == 0:
                nums[i], nums[j] = nums[j], nums[i]
                j += 1
                i += 1
            elif nums[i] == 2:
                nums[i], nums[k] = nums[k], nums[i]
                k -= 1
            else:
                i += 1
