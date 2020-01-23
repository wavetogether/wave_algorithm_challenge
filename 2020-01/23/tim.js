/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let value = nums[0];
  let next_idx = 1;
  
  for (let idx=1; idx<nums.length; idx++) {
    if (nums[idx] == value) {
      // do nothing
    } else {
      nums[next_idx++] = nums[idx];
      value = nums[idx];
    }
  }
  
  return next_idx;
};
