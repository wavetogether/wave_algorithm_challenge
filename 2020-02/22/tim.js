// Runtime: 64 ms, faster than 61.68% of JavaScript online submissions for Single Number.
// Memory Usage: 38.9 MB, less than 7.69% of JavaScript online submissions for Single Number.

/**
 * @param {number[]} nums
 * @return {number}
 */

//extra memory version
var singleNumber = function(nums) {
  let map = {};
  
  for (let idx in nums) {
    if (!map[nums[idx]]) {
      map[nums[idx]] = true;
    } else {
      delete map[nums[idx]];
    }
  }
  
  return Object.keys(map)[0];
};
