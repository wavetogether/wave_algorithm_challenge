/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let sum = nums.length - 1;
    let minindex = sum;

    for (let i = sum; i >= 0 ; i--) {
        if (i + nums[i] >= nums.length || i + nums[i] >= minindex ){
            minindex = i;
        }
    }
    return minindex === 0;
};