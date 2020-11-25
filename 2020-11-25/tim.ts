// Runtime: 80 ms, faster than 97.12% of TypeScript online submissions for Number of Islands.
// Memory Usage: 40.9 MB, less than 85.58% of TypeScript online submissions for Number of Islands.

function numIslands(grid: string[][]): number {
	let result = 0;
	const row = grid.length;
	const col = grid[0].length;

	for (let i=0; i<row; i++) {
		for (let j=0; j<col; j++) {
			if (grid[i][j] === "1") {
				result++;
			}
			checkIsland(i, j, grid);
		}
	}

	return result;
};

function checkIsland(row: number, col: number, grid: string[][]) {
	if (isOutOfBound(row, col, grid)) {
		return;
	} else if (grid[row][col] === "0") {
		return;
	}

	grid[row][col] = "0";

	checkIsland(row+1, col, grid);
	checkIsland(row-1, col, grid);
	checkIsland(row, col+1, grid);
	checkIsland(row, col-1, grid);

	return 1;
}

function isOutOfBound(row: number, col: number, grid: string[][]): boolean {
	if (row === grid.length || col === grid[0].length || row < 0 || col < 0) {
		return true;
	} else {
		return false;
	}
}
