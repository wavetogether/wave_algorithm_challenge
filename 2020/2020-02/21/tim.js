// Runtime: 68 ms, faster than 50.20% of JavaScript online submissions for Missing Number.
// Memory Usage: 37.3 MB, less than 25.72% of JavaScript online submissions for Missing Number.
var _missingNumber = function(nums) {
  let map = {};
  
  
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }
  
  for (let i = 0; i <= nums.length; i++) {
    if (map[i] !== true) {
      return i
    } 
  }
}

// Runtime: 96 ms, faster than 23.89% of JavaScript online submissions for Missing Number.
// Memory Usage: 37.7 MB, less than 17.14% of JavaScript online submissions for Missing Number.
var _missingNumber = function(nums) {
  nums.sort((a,b)=>a-b);
  
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != i) {
      return i;
    }
  }  
};
