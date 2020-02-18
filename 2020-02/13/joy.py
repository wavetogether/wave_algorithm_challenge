class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1:
            return True
        
        if n % 3 != 0 or n == 0:
            return False
        
        while n % 3 == 0:
            n /= 3
            
        return n == 1
