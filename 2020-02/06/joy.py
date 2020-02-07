class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0
        prime_number = [True] * (n-1)
        p = 2
        while (p * p < n):
            if prime_number[p-1]:
                for i in range(p * 2, n, p): 
                    prime_number[i-1] = False
            p += 1
        return sum(prime_number[1:])
