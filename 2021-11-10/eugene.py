# bucket sort를 이용해서 O(n) 만에 해결해보고자 함

class Solution(object):
    def numRescueBoats(self, people, limit):
        """
        :type people: List[int]
        :type limit: int
        :rtype: int
        """
        bucket = [0] * (limit + 1)
        for person in people:
            bucket[person] += 1

        a, b, num = 1, limit, 0
        while a <= b:
            while a <= b and bucket[a] <= 0:
                a += 1
            while a <= b and bucket[b] <= 0:
                b -= 1
            if a > b or bucket[a] <= 0 or bucket[b] <= 0:
                break
            if a == b:
                c = bucket[a] / 2 + bucket[a] % 2
            else:
                c = min(bucket[a], bucket[b])
            num += c
            if a + b <= limit:
                bucket[a] -= c
            bucket[b] -= c
        return num
