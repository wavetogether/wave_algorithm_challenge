// Success
// - Runtime: 60 ms, faster than 85.05% of JavaScript online submissions for Majority Element.
// - Memory Usage: 37.3 MB, less than 71.43% of JavaScript online submissions for Majority Element.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // - nums is non-empty
  // - majority element always exist
  if (nums.length === 1) return nums[0];
  let foo = {};
  for (let i=0; i<nums.length; i++) {
    const num = nums[i];
    if (foo[num]) {
      foo[num]++;
      if (foo[num] > nums.length / 2) return num;
    } else {
      foo[num] = 1;
    }
  }
};