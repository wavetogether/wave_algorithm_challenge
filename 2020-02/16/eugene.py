# Runtime: 52 ms, faster than 34.89% of Python online submissions for Valid Anagram.
# Memory Usage: 12.6 MB, less than 97.37% of Python online submissions for Valid Anagram.

import collections

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        s_counter, t_counter = collections.Counter(s), collections.Counter(t)
        for key, value in s_counter.items():
            if value != t_counter[key]:
                return False
            t_counter.pop(key)
        return len(t_counter) == 0
