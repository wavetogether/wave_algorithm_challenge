class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        output = ""
        if not strs:
            return output
        shortest_word = min(strs, key=len)
        strs.remove(shortest_word)
        for i in range(len(shortest_word)):
            for j in range(len(strs)):
                compare_word = strs[j]
                if compare_word[i] != shortest_word[i]:
                    return output
            output += shortest_word[i]
        return output
