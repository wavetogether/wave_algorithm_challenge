// Runtime: 68 ms, faster than 37.20% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 36.4 MB, less than 5.55% of JavaScript online submissions for Maximum Subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ret = nums[0], temp = nums[0];
  
  for (let num of nums.slice(1, nums.length)) {
    if (num + temp > num) {
      temp = num + temp;
    } else {
      temp = num;
    }
    
    if (temp > ret) {
      ret = temp;
    }
  }
  return ret;
}
