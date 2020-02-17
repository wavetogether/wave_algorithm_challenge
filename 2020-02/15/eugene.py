# Runtime: 108 ms, faster than 60.40% of Python online submissions for Contains Duplicate.
# Memory Usage: 17.2 MB, less than 61.11% of Python online submissions for Contains Duplicate.

class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return len(nums) != len(set(nums))
