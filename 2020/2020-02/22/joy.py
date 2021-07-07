# Runtime: 80 ms, faster than 95.62% of Python3 online submissions for Single Number.
# Memory Usage: 15.2 MB, less than 13.12% of Python3 online submissions for Single Number.

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return 2 * sum(set(nums)) - sum(nums)
