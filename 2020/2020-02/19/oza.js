/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0 ) return 0;
    if (nums.length === 1 ) return nums[0];
    if (nums.length === 2 ) return Math.max(nums[0], nums[1]);
    const [n0, n1, n2, ...rest] = nums;
    return Math.max(n0 + rob([n2, ...rest]), n1 + rob(rest));
};
/// time limit exceeded
