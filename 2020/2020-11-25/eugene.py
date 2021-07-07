class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        def remove_island(g, x, y):
            if 0 <= x < len(g) and 0 <= y < len(g[x]) and g[x][y] == '1':
                g[x][y] = '0'
                map(bfs, (g, g, g, g), (x + 1, x - 1, x, x), (y, y, y + 1, y - 1))
        
        number_of_islands = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '1':
                    number_of_islands += 1
                    remove_island(grid, i, j)
        return number_of_islands
