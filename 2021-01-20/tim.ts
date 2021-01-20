// Runtime: 112 ms, faster than 80.00% of TypeScript online submissions for Longest Increasing Path in a Matrix.
// Memory Usage: 45.3 MB, less than 80.00% of TypeScript online submissions for Longest Increasing Path in a Matrix.

function longestIncreasingPath(matrix: number[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    
    const map = [];
    
    let maxLength = 0;
    
    for (let i=0; i<m; i++) {
        map.push([]);
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            maxLength = Math.max(maxLength, dfs(matrix, map, i, j));
        }
    }
    
    return maxLength;
};

function dfs(matrix: number[][], map: number[][], i: number, j: number): number {
    if (map[i][j]) {
        return map[i][j];
    }
    
    const current = matrix[i][j];
    
    let max = 0;
    
    // compare with up, down, left, right cells
    if (matrix[i+1] && matrix[i+1][j] > current) {
        max = Math.max(max, dfs(matrix, map, i+1, j));
    }
    if (matrix[i] && matrix[i][j+1] > current) {
        max = Math.max(max, dfs(matrix, map, i, j+1));
    }
    if (matrix[i-1] && matrix[i-1][j] > current) {
        max = Math.max(max, dfs(matrix, map, i-1, j));
    }
    if (matrix[i] && matrix[i][j-1] > current) {
        max = Math.max(max, dfs(matrix, map, i, j-1));
    }
    
    map[i][j] = max + 1;

    return map[i][j];    
}
