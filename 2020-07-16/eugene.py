# difficulty: medium ~ hard

class Solution(object):    
    def minInsertions(self, s):
        """
        :type s: str
        :rtype: int
        """
        dp = [[-1] * len(s) for _ in range(len(s))]

        def iteration(i, j):
            if i >= j:
                return 0

            if dp[i][j] == -1:
                if s[i] == s[j]:
                    dp[i][j] = iteration(i + 1, j - 1)
                else:
                    dp[i][j] = 1 + min(iteration(i + 1, j), iteration(i, j - 1))
            return dp[i][j]

        return iteration(0, len(s) - 1)
