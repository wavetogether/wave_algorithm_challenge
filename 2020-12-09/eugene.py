class Solution(object):
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        max_value = 0
        m, n = len(matrix), len(matrix[0])
        wrapped_matrix = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(m):
            for j in range(n):
                if matrix[i][j] != '0':
                    wrapped_matrix[i][j] = min(wrapped_matrix[i-1][j], wrapped_matrix[i-1][j-1], wrapped_matrix[i][j-1]) + 1
                    max_value = max(wrapped_matrix[i][j], max_value)

        return max_value * max_value
