class Solution:
    def romanToInt(self, s: str) -> int:
        total = 0
        symbol = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
        for i in range(len(s)-1):
            total += symbol[s[i]]
            if s[i] == 'I' and (s[i+1] == 'V' or s[i+1] == 'X'):
                total -= 2
            if s[i] == 'X' and (s[i+1] == 'L' or s[i+1] == 'C'):
                total -= 20
            if s[i] == 'C' and (s[i+1] == 'D' or s[i+1] == 'M'):
                total -= 200
                
        return total + symbol[s[-1]]
