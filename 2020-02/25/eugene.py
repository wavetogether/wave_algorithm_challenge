import collections


class Solution(object):
    # Runtime: 772 ms, faster than 48.68% of Python online submissions for 3Sum.
    # Memory Usage: 15.5 MB, less than 13.46% of Python online submissions for 3Sum.
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = set()
        nums.sort()
        counter = collections.Counter(nums)
        prev = None
        for i, num1 in enumerate(nums):
            if num1 > 0:
                break
            if num1 == prev:
                continue
            for num2 in nums[i+1:]:
                num3 = -(num1 + num2)
                if num3 < 0:
                    break
                if num3 >= num2 and counter[num3] > ((num3 == num1) + (num3 == num2)):
                    result.add((num1, num2, num3))
            prev = num1
        return result

    # Runtime: 548 ms, faster than 86.43% of Python online submissions for 3Sum.
    # Memory Usage: 14.9 MB, less than 69.23% of Python online submissions for 3Sum.
    def threeSum2(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        nums.sort()
        i = 0
        while i < len(nums):
            if nums[i] > 0:
                break
            while len(nums) > i > 0 and nums[i] == nums[i-1]:
                i += 1
            j, k = i + 1, len(nums) - 1
            while j < k:
                tot = nums[i] + nums[j] + nums[k]
                if tot == 0:
                    result.append((nums[i], nums[j], nums[k]))
                    j += 1
                    while j < len(nums) and nums[j] == nums[j-1]:
                        j += 1
                elif tot > 0:
                    k -= 1
                else:
                    j += 1
            i += 1
        return result
