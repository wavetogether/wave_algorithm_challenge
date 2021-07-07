# Runtime: 16 ms, faster than 88.18% of Python online submissions for Valid Parentheses.
# Memory Usage: 11.9 MB, less than 42.02% of Python online submissions for Valid Parentheses.

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        parenthesis_pair = {'(': ')', '{': '}', '[': ']'}
        for c in s:
            if len(stack) > 0 and parenthesis_pair.get(stack[-1]) == c:
                stack.pop()
            else:
                stack.append(c)
        return len(stack) == 0
