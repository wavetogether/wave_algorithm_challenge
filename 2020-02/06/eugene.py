import math

# Runtime: 168 ms, faster than 95.18% of Python online submissions for Count Primes.
# Memory Usage: 42.5 MB, less than 42.59% of Python online submissions for Count Primes.
class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        prime_checker = [0, 0] + [1] * (n - 2)
        for i in range(2, int(n ** 0.5) + 1):
            if prime_checker[i] == 1:
                prime_checker[2 * i::i] = [0] * int(math.ceil(1.0 * (n - 2 * i) / i))
        return sum(prime_checker) if n > 2 else 0
