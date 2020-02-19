// Runtime: 44 ms, faster than 97.90% of JavaScript online submissions for House Robber.
// Memory Usage: 33.8 MB, less than 47.62% of JavaScript online submissions for House Robber.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
   return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let first = nums[0];
  let second =  Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i ++) {
    const max = Math.max(second, first + nums[i]);
    first = second;
    second = max;
  }
  
  return second;
};
