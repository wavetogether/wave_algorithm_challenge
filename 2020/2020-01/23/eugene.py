class Solution(object):
    def removeDuplicatesV1(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[j-1]:
                nums[i+1] = nums[j]
                i += 1
            j += 1
        return i + 1

    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        for num in nums[1:]:
            if nums[i] != num:
                i += 1
                nums[i] = num
        return i + 1
