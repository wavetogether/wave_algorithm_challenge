// Runtime: 68 ms, faster than 75.64% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 40 MB, less than 88.24% of JavaScript online submissions for Contains Duplicate.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length !== (new Set(nums)).size
};
