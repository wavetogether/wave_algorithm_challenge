# Runtime: 16 ms, faster than 74.98% of Python online submissions for Hamming Distance.
# Memory Usage: 11.9 MB, less than 9.09% of Python online submissions for Hamming Distance.

class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        hamming_distance = 0
        xor = x ^ y
        while xor > 0:
            hamming_distance += xor & 1
            xor = xor >> 1
        return hamming_distance
