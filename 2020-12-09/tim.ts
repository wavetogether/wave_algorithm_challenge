// Runtime: 92 ms, faster than 66.67% of TypeScript online submissions for Maximal Square.
// Memory Usage: 42.3 MB, less than 16.67% of TypeScript online submissions for Maximal Square.

function maximalSquare(matrix: string[][]): number {
  const row = matrix.length;
  const col = matrix[0].length;

  const maxSquare = [];
  let longestSoFar = 0;

  // initialize maxSquare
  for (let i = 0; i < row; i++) {
    const rows = [];
    for (let j = 0; j < col; j++) {
      rows.push(0);
    }
    maxSquare.push(rows);
  }

  // fill in maxSquare matrix, update longest width found so far
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        if (i - 1 < 0 || j - 1 < 0) {
          maxSquare[i][j] = 1;
        } else {
          maxSquare[i][j] = Math.min(maxSquare[i - 1][j - 1], maxSquare[i][j - 1], maxSquare[i - 1][j]) + 1; // check top-left, top and left
        }
        longestSoFar = Math.max(longestSoFar, maxSquare[i][j], 1);
      } else {
        maxSquare[i][j] = 0;
      }
    }
  }
  return longestSoFar ** 2;
}
