# Last executed input
# -1
# 1

class Solution(object):
    def getSum(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        while b != 0:
            a, b = a ^ b, (a & b) << 1
        return a