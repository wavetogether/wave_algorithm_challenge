# Runtime: 820 ms, faster than 23.34% of Python3 online submissions for Array of Doubled Pairs.
# Memory Usage: 16.3 MB, less than 97.80% of Python3 online submissions for Array of Doubled Pairs.

class Solution:
    def canReorderDoubled(self, arr: List[int]) -> bool:
        integers = defaultdict(int)
        
        arr.sort()
        
        for num in arr:
            integers[num] += 1
            
        while integers:
            smallest = list(integers.keys())[0]
            compliment = smallest * 2 if smallest > 0 else smallest / 2
            
            if integers[compliment] <= 0:
                return False    
            else:
                integers[smallest] -= 1
                integers[compliment] -= 1

                if integers[smallest] == 0:
                    integers.pop(smallest)

                if integers[compliment] == 0:
                    integers.pop(compliment)
                    
        return True
