class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        return ["FizzBuzz" * (i % 15 == 0) or "Buzz" * (i % 5 == 0) or "Fizz" * (i % 3 == 0) or str(i) for i in range(1, n+1)]
