/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//in-place
var gameOfLife = function(board) {
  for (let r_idx = 0; r_idx < board.length; r_idx++) {
    for (let c_idx = 0; c_idx < board[0].length; c_idx++) {
      board[r_idx][c_idx] = tempNextState(board, r_idx, c_idx);
    }
  }
  for (let r_idx = 0; r_idx < board.length; r_idx++) {
    for (let c_idx = 0; c_idx < board[0].length; c_idx++) {
      if (board[r_idx][c_idx] === 2 || board[r_idx][c_idx] === 5) {
        board[r_idx][c_idx] = 0;
      } else if (board[r_idx][c_idx] === 3 || board[r_idx][c_idx] === 4) {
        board[r_idx][c_idx] = 1;
      }
    }
  }
}

// 0->0 = 2
// 0->1 = 4
// 1->1 = 3
// 1->0 = 5
const tempNextState = (board, row, col) => {
  let currentState = board[row][col];
  let aliveNeighbor = 0;
  let newState = 2;
  
  if (board[row-1] && board[row-1][col-1] && board[row-1][col-1]%2 === 1) aliveNeighbor++;
  if (board[row][col-1] && board[row][col-1]%2 === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col-1] && board[row+1][col-1]%2 === 1) aliveNeighbor++;
  
  if (board[row-1] && board[row-1][col] && board[row-1][col]%2 === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col] && board[row+1][col]%2 === 1) aliveNeighbor++;
  
  if (board[row-1] && board[row-1][col+1] && board[row-1][col+1]%2 === 1) aliveNeighbor++;
  if (board[row][col+1] && board[row][col+1]%2 === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col+1] && board[row+1][col+1]%2 === 1) aliveNeighbor++;  
  
  if (currentState === 1 && aliveNeighbor < 2) {
    newState = 5;
  } else if (currentState === 1 && aliveNeighbor >= 2 && aliveNeighbor <= 3) {
    newState = 3;
  } else if (currentState === 1 && aliveNeighbor > 3) {
    newState = 5;
  } else if (currentState === 0 && aliveNeighbor === 3) {
    newState = 4;
  }
  
  return newState;
}

// not in place
var _gameOfLife = function(board) {
  let ret = [];
  
  for (let r_idx = 0; r_idx < board.length; r_idx++) {
    let row_buffer = [];
    for (let c_idx = 0; c_idx < board[0].length; c_idx++) {
      row_buffer.push(nextState(board, r_idx, c_idx));
    }
    ret.push(row_buffer);
  }
  
  for (let r_idx = 0; r_idx < board.length; r_idx++) {
    for (let c_idx = 0; c_idx < board[0].length; c_idx++) {
      board[r_idx][c_idx] = ret[r_idx][c_idx];
    }
  }
  
};

const nextState = (board, row, col) => {
  let currentState = board[row][col];
  let aliveNeighbor = 0;
  let newState = 0;
  
  if (board[row-1] && board[row-1][col-1] && board[row-1][col-1] === 1) aliveNeighbor++;
  if (board[row][col-1] && board[row][col-1] === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col-1] && board[row+1][col-1] === 1) aliveNeighbor++;
  
  if (board[row-1] && board[row-1][col] && board[row-1][col] === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col] && board[row+1][col] === 1) aliveNeighbor++;
  
  if (board[row-1] && board[row-1][col+1] && board[row-1][col+1] === 1) aliveNeighbor++;
  if (board[row][col+1] && board[row][col+1] === 1) aliveNeighbor++;
  if (board[row+1] && board[row+1][col+1] && board[row+1][col+1] === 1) aliveNeighbor++;  
  
  if (currentState === 1 && aliveNeighbor < 2) {
    newState = 0;
  } else if (currentState === 1 && aliveNeighbor >= 2 && aliveNeighbor <= 3) {
    newState = 1;
  } else if (currentState === 1 && aliveNeighbor > 3) {
    newState = 0;
  } else if (currentState === 0 && aliveNeighbor === 3) {
    newState = 1;
  }
  
  return ret;
}
