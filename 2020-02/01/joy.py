class Solution:
    def reverse(self, x: int) -> int:
        if x >= 0:
            result = str(x)[::-1].lstrip('0')
        else: 
            result = '-' + str(-x)[::-1].lstrip('0')
       
        if x == 0 or int(result) > 2**31 -1 or int(result) < - 2**31:
            result = 0
        return int(result)
