// Runtime: 104 ms, faster than 51.25% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
// Memory Usage: 41.1 MB, less than 15.91% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const given = JSON.parse(JSON.stringify(nums));
  nums.sort((a,b) => a-b);
  
  const firstIncorrect = -1, lastCorrect = -1;
  let startIndex = nums.length-1, endIndex=0;
  
  for (let index = 0; index < nums.length; index++) {
    if (given[index] != nums[index]) {
      startIndex = index;
      break;
    }
  }
    
  for (let index = given.length - 1; index >= 0; index--) {
    if (given[index] != nums[index]) {
      endIndex = index;
      break;
    }
  }
  
  if (startIndex == nums.length - 1 && endIndex == 0) {
    return 0;
  }
  
  return (endIndex - startIndex + 1);
};
