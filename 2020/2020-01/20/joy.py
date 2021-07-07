class Solution:
    def check_ages(self, a, b):
        if b <= 0.5 * a + 7 or (b > 100 and a < 100):
            return False
        return True
    def numFriendRequests(self, ages: List[int]) -> int:
        result = 0
        sorted_ages = sorted(ages, reverse=True)
        for i in range(len(ages)):
            for j in range(i+1, len(ages)):
                a = sorted_ages[i]
                b = sorted_ages[j]
                if b <= 0.5 * a + 7:
                    break
                if a == b:
                    result += 1
                result += 1
        return result
