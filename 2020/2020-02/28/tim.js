// Runtime: 360 ms, faster than 5.13% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 126.3 MB, less than 33.33% of JavaScript online submissions for Sliding Window Maximum.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let prevWindow = nums;
    let iter = 1;
  
    while (iter < k) {
      let temp = [];
      for (let i = 0; i < prevWindow.length - 1; i++) {
          temp.push(Math.max(prevWindow[i], prevWindow[i+1]));
      }
      prevWindow = temp;
      iter++;
    }
  
    return prevWindow;
};
