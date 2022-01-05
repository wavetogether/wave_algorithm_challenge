class Solution(object):
    def longestIncreasingPath(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        
        def dps(i, j):
            if dp[i][j] == 0:
                dp[i][j] = 1 + max(
                    dps(i+1, j) if i+1 < m and matrix[i][j] < matrix[i+1][j] else 0,
                    dps(i-1, j) if i-1 >= 0 and matrix[i][j] < matrix[i-1][j] else 0,
                    dps(i, j+1) if j+1 < n and matrix[i][j] < matrix[i][j+1] else 0,
                    dps(i, j-1) if j-1 >= 0 and matrix[i][j] < matrix[i][j-1] else 0,
                )
        
            return dp[i][j]

        return max(dps(x, y) for x in range(m) for y in range(n))
