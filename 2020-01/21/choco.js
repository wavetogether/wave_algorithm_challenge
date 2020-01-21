/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const prevBoard = board.map(row => row.slice());  // DEEP COPY!

  // i, j for iterating the board
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      // Count live neighbors of cell (i, j)
      let liveNeighborsCount = 0;
      // k, l for iterating neighbors
      for (let k=i-1; k<=i+1; k++) {
        for (let l=j-1; l<=j+1; l++) {
          if (k === i && l === j) {
            // It's me
          } else if (prevBoard[k] !== undefined && prevBoard[k][l] !== undefined) {
            liveNeighborsCount += prevBoard[k][l];
          }
        }
      }
      if (prevBoard[i][j]) {
        if (liveNeighborsCount < 2) {
          // dies by under-population
          board[i][j] = 0;
        } else if (liveNeighborsCount > 3) {
          // dies by over-population
          board[i][j] = 0;
        }
        // lives to the next generation
        // if (liveNeighborsCount === 2 || liveNeighborsCount === 3) {} // do nothing
      } else {
        // resurrects by reproduction
        if (liveNeighborsCount === 3) board[i][j] = 1;
      }
    }
  }
};