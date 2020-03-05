class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        if n == 0: 
            return ['']
        result = []
        for i in range(n):
            for l in self.generateParenthesis(i):
                for r in self.generateParenthesis(n-i-1):
                    result.append(l + '(' + r + ')')
        return result
