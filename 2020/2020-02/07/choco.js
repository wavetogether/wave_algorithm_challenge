/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const rows = [];
  for (let i=1; i<=numRows; i++) {
    rows.push(nthRowMemo(i));
  }
  return rows;
};

const nthRow = (n) => {
  console.log(`nthRow(${n}) called`);
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    const row = [];
    for (let i=0; i<n; i++) {
      if (i === 0 || i === n-1) {
        row.push(1);
      } else {
        row.push(nthRow(n-1)[i-1] + nthRow(n-1)[i]);
      }
    }
    return row;
  }
}

const nthRowMemo = (n, memo) => {
  memo = memo || {};

  if (memo[n]) return memo[n];
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    const row = [];
    for (let i=0; i<n; i++) {
      if (i === 0 || i === n-1) {
        row.push(1);
      } else {
        row.push(nthRowMemo(n-1, memo)[i-1] + nthRowMemo(n-1, memo)[i]);
      }
    }
    return memo[n] = row;
  }
}
