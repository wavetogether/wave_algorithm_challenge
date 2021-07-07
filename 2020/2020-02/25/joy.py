# Runtime: 720 ms, faster than 53.97% of Python online submissions for 3Sum.
# Memory Usage: 15.1 MB, less than 25.00% of Python online submissions for 3Sum.

class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums = sorted(nums)
        result = []
        seen = []
        for i in range(len(nums)):
            a = nums[i]
            b_index = i+1
            c_index = len(nums)-1
            checked = []
            if a not in seen:
                while b_index < c_index:
                    b = nums[b_index]
                    c = nums[c_index]
                    if a + b + c > 0:
                        c_index -= 1
                    elif a + b + c < 0:
                        b_index += 1
                    else:
                        if b not in checked and c not in checked:
                            result.append([a, b, c])
                            checked.append(b)
                            checked.append(c)
                        c_index -= 1
                        b_index += 1
                seen.append(a)
        return result
