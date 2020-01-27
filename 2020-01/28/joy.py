import math

class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        result = 0
        max_two = n//2
        for i in range(max_two+1):
            ones = n - 2 * i
            result += math.factorial(ones+i) / (math.factorial(ones) * math.factorial(i))
        return result
