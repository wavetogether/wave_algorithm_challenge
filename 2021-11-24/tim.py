# Runtime: 496 ms, faster than 67.02% of Python3 online submissions for Jump Game.
# Memory Usage: 15.4 MB, less than 37.24% of Python3 online submissions for Jump Game. constnat

# time: O(n)
# space: constant

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        reachable = 0
        
        for i, num in enumerate(nums):
            if i <= reachable:
                reachable = max(reachable, i + num)
            
            if reachable >= len(nums) - 1:
                return True
        
        return False
