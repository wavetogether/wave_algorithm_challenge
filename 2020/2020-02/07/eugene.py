# Runtime: 12 ms, faster than 93.30% of Python online submissions for Pascal's Triangle.
# Memory Usage: 11.8 MB, less than 36.67% of Python online submissions for Pascal's Triangle.
class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows < 1:
            return []
        pascal_triangle = [[1]]
        for i in range(numRows - 1):
            row = map(lambda a, b: a + b, [0] + pascal_triangle[i], pascal_triangle[i] + [0])
            pascal_triangle.append(row)
        return pascal_triangle
