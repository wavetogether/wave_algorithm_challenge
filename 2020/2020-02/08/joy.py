class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        if k >= len(nums):
            k = k % len(nums)
        if k == 0:
            return
        
        front = nums[-k:]
        back = nums[:len(nums)-k]
        i, j = 0, 0
        while i < len(front):
            nums[i] = front[i]
            i += 1
        while j < len(back):
            nums[i+j] = back[j]
            j += 1
