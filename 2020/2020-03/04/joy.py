class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        b = len(nums) -1
        f = 0
        i = 0 
        while i <= b:
            if i != b and nums[i] == 2 and nums[b] == 2:
                while b > 0 and nums[b] == 2:
                    b -= 1
                if b < i:
                    b = i
            if nums[i] > nums[b] and nums[i] == 2:
                nums[i], nums[b] = nums[b], nums[i]
            if i != f and nums[i] == 0 and nums[f] == 0:
                while f < len(nums) and nums[f] == 0:
                    f += 1
                if f > i:
                    f = i
            if nums[i] < nums[f] and nums[i] == 0:
                nums[i], nums[f] = nums[f], nums[i]
            i += 1
