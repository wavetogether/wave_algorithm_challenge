class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return sum(1 for b in bin(x^y) if b.isdigit() and int(b) % 2 == 1)
