// 311 / 313 test cases passed.
// Status: Time Limit Exceeded

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let pairs = [];
  
  for (let i = 0; i < nums.length-2; i++) {
    for (let j=i+1; j< nums.length-1; j++) {
      pairs.push([i, j]);
    }
  }
  
  let ret_map = [];
  
  for (let idx in pairs) {
    const sum = nums[pairs[idx][0]] + nums[pairs[idx][1]];
    
    for (let i = pairs[idx][1]+1; i <= nums.length-1; i++) {
      
      
      if (nums[i] === sum * -1 && i !== pairs[0] && i !== pairs[1]) {
        let key = [nums[pairs[idx][0]], nums[pairs[idx][1]], nums[i]].sort().join('/');
        ret_map[key] = true;
      }
    } 
  }
  
  let ret = [];
  
  for (let key in ret_map) {
    ret.push(key.split('/'));
  }
  return ret;
};
