class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """    
        ascending_index = len(nums) - 2
        while ascending_index >= 0 and nums[ascending_index] >= nums[ascending_index + 1]:
            ascending_index -= 1

        if ascending_index > -1:
            swap = False
            i, j = ascending_index + 1, len(nums) - 1
            while i <= j:
                if not swap:
                    if nums[ascending_index] >= nums[i]:
                        nums[ascending_index], nums[j + 1] = nums[j + 1], nums[ascending_index]
                        swap = True
                    elif nums[ascending_index] < nums[j]:
                        nums[ascending_index], nums[j] = nums[j], nums[ascending_index]
                        swap = True
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                j -= 1
            if not swap:
                nums[ascending_index], nums[i] = nums[i], nums[ascending_index]
        else:
            nums.reverse()
