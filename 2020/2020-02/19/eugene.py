# Runtime: 12 ms, faster than 95.96% of Python online submissions for House Robber.
# Memory Usage: 11.8 MB, less than 46.81% of Python online submissions for House Robber.

class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dp = [0] * (len(nums) + 2)
        for i, num in enumerate(nums):
            dp[i+2] = max(dp[i] + num, dp[i+1])
        return dp[-1]