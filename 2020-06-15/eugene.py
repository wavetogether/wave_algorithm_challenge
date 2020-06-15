class Solution(object):
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """        
        l, r = len(nums), 0

        stack = []
        for i in range(len(nums)):
            while len(stack) > 0 and nums[stack[-1]] > nums[i]:
                l = min(l, stack.pop())
            stack.append(i)

        stack = []
        for i in reversed(range(len(nums))):
            while len(stack) > 0 and nums[stack[-1]] < nums[i]:
                r = max(r, stack.pop())
            stack.append(i)

        return r - l + 1 if r > l else 0
 
