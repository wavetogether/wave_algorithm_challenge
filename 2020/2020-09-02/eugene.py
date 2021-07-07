class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        permutations = [[]]   
        for num in nums:
            queue = []
            for permutation in permutations:
                for i in range(len(permutation) + 1):   
                    queue.append(permutation[:i] + [num] + permutation[i:])
            permutations = queue
        return permutations

    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        permutations = [[]]   
        for num in nums:
            queue = []
            for permutation in permutations:
                for i in range(len(permutation) + 1):   
                    queue.append(permutation[:i] + [num] + permutation[i:])
                    if i < len(permutation) and permutation[i] == num:
                        break
            permutations = queue
        return permutations

