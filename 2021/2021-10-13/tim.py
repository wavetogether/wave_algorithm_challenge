# Runtime: 452 ms, faster than 58.07% of Python3 online submissions for Longest Common Subsequence.
# Memory Usage: 22.1 MB, less than 58.78% of Python3 online submissions for Longest Common Subsequence.

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:     
        dp = [[0] * len(text2) for _ in range(len(text1))]
        
        for i in range(len(text1)):
            for j in range(len(text2)):
                if text1[i] == text2[j]:
                    if i-1 < 0 or j-1 < 0:
                        dp[i][j] = 1
                    else:
                        dp[i][j] = dp[i-1][j-1] + 1
                
                dp[i][j] = max(dp[i-1][j], dp[i][j-1], dp[i][j])
        
        return dp[-1][-1]
