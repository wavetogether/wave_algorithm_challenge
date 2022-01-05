class Solution(object):
    def countSmaller(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        counts = [0] * len(nums)
        
        def merge_sort(indices):
            if len(indices) <= 1:
                return indices
            mid = len(indices) / 2
            return merge(merge_sort(indices[:mid]), merge_sort(indices[mid:]))

        def merge(left, right):
            result = []
            while left and right:
                if nums[left[0]] > nums[right[0]]:
                    counts[left[0]] += len(right)
                    result.append(left.pop(0))
                else:
                    result.append(right.pop(0))
            result += left or right
            return result

        merge_sort(range(len(nums)))
        return counts
