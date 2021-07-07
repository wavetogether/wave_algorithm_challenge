// Runtime: 144 ms, faster than 15.92% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 60.8 MB, less than 5.88% of JavaScript online submissions for Contains Duplicate.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = {};
  
    if (nums.length <= 1) {
      return false;
    }
  
    for (let num of nums) {
        if (arr[num]) {
            return true;
        }
        arr[num] = true;
    }
    console.log(arr)
    return false;
}
