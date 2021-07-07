class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        reversed_x = int(str(abs(x))[::-1]) if x > 0 else -int(str(abs(x))[::-1])
        return 0 if reversed_x <= -2**31 or reversed_x >= 2**31 else reversed_x
