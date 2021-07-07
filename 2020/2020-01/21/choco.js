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
      let k = i===0 ? 0 : i-1;
      for (; k<=i+1 && k<board.length; k++) {
        let l = j===0 ? 0 : j-1;
        for (; l<=j+1 && l<board[0].length; l++) {
          liveNeighborsCount += prevBoard[k][l];
        }
      }
      if (prevBoard[i][j]) {
        // my living point is added
        if (liveNeighborsCount < 3 || liveNeighborsCount > 4) {
          // dies by under-population or over-population
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