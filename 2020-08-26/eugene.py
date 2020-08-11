class Solution(object):
    def combinationSum(self, candidates, target, result = None, solution = None):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        if result is None:
            result = []
        if solution is None:
            solution = []
        
        if target < 0:
            return result
        if target == 0:
            result.append(solution)
            return result
        
        for i, candidate in enumerate(candidates):
            if candidate <= target:
                self.combinationSum(candidates[i:], target - candidate, result, solution + [candidate])
        
        return result
