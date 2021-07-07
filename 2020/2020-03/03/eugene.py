# Runtime: 20 ms, faster than 81.05% of Python online submissions for Generate Parentheses.
# Memory Usage: 12 MB, less than 64.71% of Python online submissions for Generate Parentheses.

class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []

        def helper(paren, remain_open, remain_close):
            if remain_open == 0 and remain_close == 0:
                result.append(paren)
            if remain_open > 0:
                helper(paren + "(", remain_open - 1, remain_close)
            if remain_open < remain_close:
                helper(paren + ")", remain_open, remain_close - 1)

        helper("", n, n)
        return result
