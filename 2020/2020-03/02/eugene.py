# Runtime: 148 ms, faster than 85.43% of Python online submissions for Majority Element.
# Memory Usage: 13.4 MB, less than 48.78% of Python online submissions for Majority Element.

class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        majority, counter = nums[0], 1
        for num in nums[1:]:
            if counter == 0:
                majority = num
            if num == majority:
                counter += 1
            else:
                counter -= 1
        return majority
