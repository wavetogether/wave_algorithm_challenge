class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        i, j = 0, 0
        for i, str in enumerate(zip(*strs)):
            j = 1
            if len(set(str)) != 1:
                return strs[0][:i]
        return strs[0][:i+j] if len(strs) else ''
