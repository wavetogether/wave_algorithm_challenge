/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // If nums is short
    if (nums.length === 1) return;
    if (nums.length === 2) {
        nums.reverse();
        return;
    }
    
    // Find last decreasing index
    const numsLength = nums.length;
    let lastDecreasingIndex = -1;
    for (let i=numsLength-2; i>=0; i--) {
        if (nums[i] < nums[i+1]) {
            lastDecreasingIndex = i;
            break;
        }
    }
    
    // If nums is decreasing, reverse
    if (lastDecreasingIndex === -1) {
        nums.reverse();
        return;
    }
    
    // Find last minimum bigger index
    const lastDecreasingElement = nums[lastDecreasingIndex];
    let lastMinimumBiggerIndex = lastDecreasingIndex+1;
    for (let i=lastMinimumBiggerIndex; i<numsLength; i++) {
        if (
            nums[i] > lastDecreasingElement &&
            nums[i] <= nums[lastMinimumBiggerIndex]
        ) {
            lastMinimumBiggerIndex = i;
        }
    }
    
    // Swap last decreaseing element and last minimum bigger element
    nums[lastDecreasingIndex] = nums[lastMinimumBiggerIndex];
    nums[lastMinimumBiggerIndex] = lastDecreasingElement;
    
    // Reverse after last decreasing index
    for (let i=lastDecreasingIndex+1; i<numsLength; i++) {
        if (i >= numsLength + lastDecreasingIndex - i) break;
        const temp = nums[i];
        nums[i] = nums[numsLength + lastDecreasingIndex - i];
        nums[numsLength + lastDecreasingIndex - i] = temp;
    }
};
