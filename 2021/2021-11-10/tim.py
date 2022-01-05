# Runtime: 464 ms, faster than 51.98% of Python3 online submissions for Boats to Save People.
# Memory Usage: 20.9 MB, less than 94.86% of Python3 online submissions for Boats to Save People.

class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort() # sort in ascending order
        
        left, right = 0, len(people) - 1 # define two pointers
        
        result = 0 # number of boats
        
        while left <= right:
            if left == right: # one person left. end loop
                result += 1
                break
            elif people[left] + people[right] <= limit: # heaviest person and lightest person can fit in one boat 
                left += 1
                right -= 1
            else: # heaviest person has to use the boat by himself
                right -= 1
                
            result += 1
        
        return result
