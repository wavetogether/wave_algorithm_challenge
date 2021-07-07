class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums)
        if len(nums) == 3:
            return max(nums[0]+nums[2], nums[1])
        else:
            return max(nums[0] + self.rob(nums[2:]), nums[1] + self.rob(nums[3:]))
