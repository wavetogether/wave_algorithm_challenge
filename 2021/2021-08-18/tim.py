# Runtime: 756 ms, faster than 19.46% of Python3 online submissions for Cinema Seat Allocation.
# Memory Usage: 17.9 MB, less than 81.88% of Python3 online submissions for Cinema Seat Allocation.

class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        map = {}
        
        for reservedSeat in reservedSeats:
            row, col = reservedSeat[0], reservedSeat[1]
            if row in map:
                map[row].append(col)
            else:
                map[row] = [col]
                
        result = (n - len(map)) * 2
        
        for row in map:
            usedSeats = map[row]
            
            isLeftAvailable = True not in [i in usedSeats for i in range(2, 6)]
            isRightAvailable = True not in [i in usedSeats for i in range(6, 10)]
            isCenterAvailable = True not in [i in usedSeats for i in range(4, 8)]
            
            if isLeftAvailable or isRightAvailable:
                if isLeftAvailable and isRightAvailable:
                    result += 2
                else:
                    result += 1
            elif isCenterAvailable:
                result += 1
                
        return result
    
    
    ## time limit exceeded
    def _maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        seats = [[1] * 10 for _ in range(n)]
        
        for reservedSeat in reservedSeats:
            seats[reservedSeat[0]-1][reservedSeat[1]-1] = 0
        
        result = 0
        
        for i in range(n):
            if 0 not in [map[i][3+j] for j in range(4)]:
                result += 1
            else:
                if 0 not in [seats[i][1+j] for j in range(4)]:
                    result += 1
                if 0 not in [seats[i][5+j] for j in range(4)]:
                    result += 1
                    
        return result
