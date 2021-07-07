# Runtime: 12 ms, faster than 94.28% of Python online submissions for Letter Combinations of a Phone Number.
# Memory Usage: 11.9 MB, less than 11.90% of Python online submissions for Letter Combinations of a Phone Number.

class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        if not digits:
            return []

        digit_map = {
            "2": ["a","b","c"],
            "3": ["d","e","f"],
            "4": ["g","h","i"],
            "5": ["j","k","l"],
            "6": ["m","n","o"],
            "7": ["p","q","r","s"],
            "8": ["t","u","v"],
            "9": ["w","x","y","z"]
        }
        queue = digit_map[digits[0]][:]
        for digit in digits[1:]:
            for _ in range(len(queue)):
                e = queue.pop(0)
                for char in digit_map[digit]:
                    queue.append(e + char)
        return queue
