class Solution:
    def isHappy(self, n: int) -> bool:
        def square_digits(n):
            result = 0
            while n > 9:
                r = n % 10
                result += r ** 2
                n = n // 10
            return result + n ** 2
        if n == 0: 
            return False
        output = []
        while True:
            new_n = square_digits(n)
            if new_n in output:
                return False
            if new_n == 1:
                return True
            output.append(new_n)
            n = new_n
