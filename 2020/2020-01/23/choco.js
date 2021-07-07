/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const numsLength = nums.length;
  let prev = '';
  let prevIndex = 0;
  for (let i=0; i<numsLength; i++) {
    const curr = nums[prevIndex];
    if (curr === prev) {
      nums.splice(prevIndex, 1);
    } else {
      prev = curr;
      prevIndex++;
    }
  }
};