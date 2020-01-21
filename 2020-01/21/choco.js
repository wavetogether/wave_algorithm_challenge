/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const rowsCount = board.length;
  const columnsCount = board[0].length;
  const prevBoard = board.map(row => row.slice());

  for (let i=0; i<rowsCount; i++) {
    for (let j=0; j<columnsCount; j++) {
      let liveNeighborsCount = 0;
      for (let k=i-1; k<=i+1; k++) {
        for (let l=j-1; l<=j+1; l++) {
          if (k === i && l === j) {
            // It's me
          } else if ((k >= 0 && k < rowsCount) && ( l >= 0 && l < columnsCount)) {
            liveNeighborsCount += prevBoard[k][l];
          }
        }
      }
      if (prevBoard[i][j]) {
        // dies by under-population
        if (liveNeighborsCount < 2) board[i][j] = 0;
        // lives to the next generation
        // if (liveNeighborsCount === 2 || liveNeighborsCount === 3) {} // do nothing
        // dies by over-population
        if (liveNeighborsCount > 3) board[i][j] = 0;
      } else {
        // resurrects by reproduction
        if (liveNeighborsCount === 3) board[i][j] = 1;
      }
    }
  }
};