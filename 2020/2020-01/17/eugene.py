class Solution(object):
    def minPatches(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: int
        """
        num_i, max_num, patch_num = 0, 0, 0
        while max_num < n:
            if num_i >= len(nums) or nums[num_i] > max_num + 1:
                max_num += max_num + 1
                patch_num += 1
            else:
                max_num += nums[num_i]
                num_i += 1
        return patch_num
