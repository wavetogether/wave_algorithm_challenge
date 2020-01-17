/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let numberToCheck = 1;
  let idx = 0;
  let patch = 0;
  let size = nums.length;
  
  while (numberToCheck <= n) { // check from 1 to n
    
    if (idx < size && nums[idx] <= numberToCheck) { 
      // skip numberToCheck to numberToCheck + nums[idx]
      numberToCheck += nums[idx]; 
      idx++;
    } else {
      //patch and x2 numberToCheck 
      numberToCheck += numberToCheck;
      patch++;
    }
    
  }
  return patch;
};
