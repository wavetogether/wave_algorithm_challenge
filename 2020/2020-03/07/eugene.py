# Runtime: 16 ms, faster than 91.89% of Python online submissions for Happy Number.
# Memory Usage: 11.8 MB, less than 12.50% of Python online submissions for Happy Number.

class Solution(object):
    def __init__(self):
        self.checker = set()

    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        calc_num = 0
        while n > 0:
            calc_num += (n % 10) ** 2
            n /= 10
        if calc_num == 1:
            return True
        if calc_num not in self.checker:
            self.checker.add(calc_num)
            return self.isHappy(calc_num)
        else:
            return False