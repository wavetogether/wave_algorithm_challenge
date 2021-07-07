# difficulty: easy

class Solution(object):
    def minSteps(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        s_counter = collections.Counter(s)
        t_counter = collections.Counter(t)
        for value, num in s_counter.items():
            t_counter[value] -= num
        return sum(value for value in t_counter.values() if value >= 0)
