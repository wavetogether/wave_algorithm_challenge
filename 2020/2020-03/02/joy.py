from collections import Counter
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        majority = int(len(nums)/2)
        count = Counter(nums)
        for number in count:
            if count[number] > majority:
                break
        return number
