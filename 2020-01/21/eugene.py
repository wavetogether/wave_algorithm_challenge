class Solution(object):
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        # for x in range(len(board)):
        #     for y in range(len(board[0])):
        #         live_cnt = sum(board[X][Y] % 2
        #                        for X in range(max(0, x-1), min(x+2, len(board)))
        #                        for Y in range(max(0, y-1), min(y+2, len(board[0])))
        #                        if X != x or Y != y)
        #         if board[x][y] == 0 and live_cnt == 3:
        #             board[x][y] = 12
        #         elif board[x][y] == 1 and live_cnt in (2, 3):
        #             board[x][y] = 11
        # for x in range(len(board)):
        #     for y in range(len(board[0])):
        #         board[x][y] /= 10
        for x in range(len(board)):
            for y in range(len(board[0])):
                if board[x][y] % 2 == 1:
                    for X in range(max(0, x-1), min(x+2, len(board))):
                        for Y in range(max(0, y-1), min(y+2, len(board[0]))):
                            if X != x or Y != y:
                                board[X][Y] += 2
        for x in range(len(board)):
            for y in range(len(board[0])):
                live_cnt = board[x][y] // 2
                if board[x][y] % 2 == 0:
                    board[x][y] = 1 if live_cnt == 3 else 0
                else:
                    board[x][y] = 1 if live_cnt in (2, 3) else 0
