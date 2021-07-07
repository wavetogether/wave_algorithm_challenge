/**
 * Runtime: 92 ms, faster than 70.63% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
 * Memory Usage: 40.4 MB, less than 21.72% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if (nums.length === 1) return 0;
    
    // 1. Copy and sort
    const numsCopy = [...nums];
    numsCopy.sort((a, b) => a - b);
    
    // 2. Find diff from front
    let firstSubArrayIndex = nums.length-1;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== numsCopy[i]) {
            firstSubArrayIndex = i;
            break;
        }
    }
    if (firstSubArrayIndex === nums.length-1) return 0;
    
    // 3. Find diff from end
    let lastSubArrayIndex = 0;
    for (let i=nums.length-1; i>=0; i--) {
        if (nums[i] !== numsCopy[i]) {
            lastSubArrayIndex = i;
            break;
        }
    }
    return lastSubArrayIndex - firstSubArrayIndex + 1;
};

