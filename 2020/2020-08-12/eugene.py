class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = [-1, -1]
        if len(nums) < 1:
            return result
        
        left, right = 0, len(nums) - 1
        while left != right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if nums[right] == target:
            result[0] = right

        left, right = 0, len(nums)
        while left != right:
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid
            else:
                left = mid + 1
        if nums[right - 1] == target:
            result[1] = right - 1

        return result
