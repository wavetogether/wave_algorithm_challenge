class Solution(object):
    def largestDivisibleSubset(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        dp = [[]]
        for n in sorted(nums):
            temp = []
            for answers in dp:
                if not answers or n % answers[-1] == 0:
                    temp.append(answers + [n])
            dp.append(max(temp, key=len))
        return max(dp, key=len)
