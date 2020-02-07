class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        prev = []
        for i in range(numRows):
            current = []
            if i == 0:
                current = [1]
            elif i == 1: 
                current = [1, 1]
            else:
                current = [1] + [prev[i]+ prev[i+1] for i in range(len(prev)-1)] + [1]
            result.append(current)
            prev = current
        return result
