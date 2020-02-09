# Runtime: 212 ms, faster than 40.60% of Python online submissions for First Unique Character in a String.
# Memory Usage: 12.2 MB, less than 71.74% of Python online submissions for First Unique Character in a String.
from collections import Counter

class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        counter = Counter(s)
        for i, c in enumerate(s):
            if counter[c] == 1:
                return i
        return -1
