class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        accumulate_counter = collections.Counter([0])
        cnt = accumulate_sum = 0
        for num in nums:
            accumulate_sum += num
            cnt += accumulate_counter[accumulate_sum - k]
            accumulate_counter[accumulate_sum] += 1
        return cnt
