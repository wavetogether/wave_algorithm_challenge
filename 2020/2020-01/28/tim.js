/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  if (n===1) {
    return 1;
  }
  
  let prevprev = 1;
  let prev = 2;
  
  let idx = 2;
  
  while (idx < n) {
    let temp = prevprev;
    prevprev = prev;
    prev = temp + prev
    idx++;
  }
  
  return prev;
} 
  
