# 우선 4명이 앉을 수 있는 방법은 3개밖에 존재하지 않습니다. 그런데 4,5,6,7에 앉을 경우 2,3,4,5와 6,7,8,9에 모두 앉을 수 없게 됩니다.
# 따라서 2,3,4,5와 6,7,8,9에 앉을 수 있는지 체크하고 앉을 수 없다면 4,5,6,7에 앉는 방법을 시도해야 합니다.
# 반대로 2,3,4,5에 앉을 수 있다면 4,5,6,7에 앉을 수 있는지는 체크할 필요가 없습니다. (어차피 1개 이상 앉을 수 없기 때문에)
#
# 해당 아이디어를 기반으로, 비트 연산을 이용해서 풀었습니다.
# 처음에는 list를 이용해서 모든 seat를 만들어줬는데, 이 경우 time limit에 걸려서, 예약되지 않은 라인들은 그냥 2를 더하면 되도록 dict로 변경했습니다.
# 18 ~ 20: 2진수로 바꿔서 예약된 좌석을 1로 처리하고, 예약되지 않은 좌석을 0으로 만듭니다.
# 22 ~ 27: 위에서 이야기한 3가지 방법을 앉을 수 있는지 확인합니다. 모두 겹치지 않으면 앉을 수 있는 것입니다.

class Solution(object):
    def maxNumberOfFamilies(self, n, reservedSeats):
        """
        :type n: int
        :type reservedSeats: List[List[int]]
        :rtype: int
        """
        # seats = [0] * n
        seats = collections.defaultdict(int)
        for i, j in reservedSeats:
            seats[i - 1] = seats[i - 1] | (1 << j - 1)

        result = 0
        for seat in seats.values():
            result_snap = result
            result += (seat & int('0111100000', 2)) == 0
            result += (seat & int('0000011110', 2)) == 0
            result += (seat & int('0001111000', 2)) == 0 and result_snap == result
        return result + 2 * (n - len(seats))
