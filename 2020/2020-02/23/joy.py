# Runtime: 48 ms, faster than 62.03% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 18.5 MB, less than 5.95% of Python3 online submissions for Valid Palindrome.

class Solution:
    def isPalindrome(self, s: str) -> bool:
        alpha_s = ''.join([i.lower() for i in s if i.isalnum()])
        for i in range(len(alpha_s)//2):
            if alpha_s[i] != alpha_s[-i-1]:
                return False
        return True
