class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        letters = dict()
        for index, char in enumerate(s):
            if char not in letters:
                letters[char] = (1, index)
            else:
                count = letters[char][0]
                letters[char] = (count+1, index)
        non_repeating_char = sorted([v for k, v in letters.items() if v[0] == 1], key = lambda x: x[1])
        result = -1 if len(non_repeating_char) == 0 else non_repeating_char[0][1]
        return result
