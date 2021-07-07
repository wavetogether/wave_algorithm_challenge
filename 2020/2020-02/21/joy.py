# Runtime: 136 ms, faster than 84.86% of Python3 online submissions for Missing Number.
# Memory Usage: 14 MB, less than 90.32% of Python3 online submissions for Missing Number.

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        total = sum(nums)
        n = len(nums)
        return int(n * (n+1) / 2) - total
