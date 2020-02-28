# Runtime: 144 ms, faster than 66.10% of Python online submissions for Sliding Window Maximum.
# Memory Usage: 18.7 MB, less than 89.66% of Python online submissions for Sliding Window Maximum.

class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        deque, result = [], []
        for i, num in enumerate(nums):
            while len(deque) > 0 and deque[-1][0] < num:
                deque.pop()
            deque.append((num, i))
            if deque[0][1] + k <= i:
                deque.pop(0)
            result.append(deque[0][0])
        return result[k-1:]
