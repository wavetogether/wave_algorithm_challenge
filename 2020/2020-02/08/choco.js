/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i=0; i<k; i++) {
    nums.unshift(nums.pop());
  }
};

// slower, no use of library
var rotate2 = function(nums, k) {
  for (let i=0; i<k; i++) {
    for (let k=nums.length-1; k>0; k--) {
      const temp = nums[k];
      nums[k] = nums[k-1];
      nums[k-1] = temp;
    }
  }
};
