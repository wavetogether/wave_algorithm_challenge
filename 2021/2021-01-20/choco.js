/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;

  // Make memo
  const memo = new Array(rowsCount);
  for (let i=0; i<rowsCount; i++) {
    memo[i] = new Array(columnsCount).fill(-1);
  }

  // Find the longest increasing path length on [row, column] using DFS
  // (Use 'previousNumber' for performance)
  function getLongestIncreasingPathLengthOfCell(row, column, previousNumber) {
    // out of bound
    if (row < 0 || column < 0 || row >= rowsCount || column >= columnsCount) return 0;
    // increasing path
    if (matrix[row][column] <= previousNumber) return 0;
    // Use memo
    if (memo[row][column] > -1) return memo[row][column];

    const up    = getLongestIncreasingPathLengthOfCell(row + 1, column, matrix[row][column]);
    const down  = getLongestIncreasingPathLengthOfCell(row - 1, column, matrix[row][column]);
    const left  = getLongestIncreasingPathLengthOfCell(row, column - 1, matrix[row][column]);
    const right = getLongestIncreasingPathLengthOfCell(row, column + 1, matrix[row][column]);

    memo[row][column] = Math.max(up, down, left, right) + 1;
    return memo[row][column];
  }

  // Rotate all cells and get the longest value
  let longestLength = 0;
  for (let i=0; i<rowsCount; i++) {
      for (let j=0; j<columnsCount; j++) {
          const longestIncreasingPathLengthOfCell = getLongestIncreasingPathLengthOfCell(i, j, -1);
          if (longestLength < longestIncreasingPathLengthOfCell) longestLength = longestIncreasingPathLengthOfCell;
      }
  }
  return longestLength;
};

// test
// console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // basic test
// console.log(longestIncreasingPath([[2147483647,1]])); // failed by row/column count
