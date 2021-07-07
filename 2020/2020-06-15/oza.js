// Runtime: 88 ms, faster than 74.58% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
// Memory Usage: 39.3 MB, less than 30.81% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 0;
  if (nums.length === 2) {
    if (nums[0] > nums[1]) return 2;
    return 0;
  }
  let firstIndex = -1;
  let lastIndex = nums.length;

  let sameCnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) continue;
    const num = nums[i];
    const prevNum = nums[i - 1];

    if (num === prevNum) {
      sameCnt++;
    } else if (num < prevNum) {
      if (firstIndex === -1) {
        firstIndex = i - 1 - sameCnt;
        break;
      }
      sameCnt = 0;
    } else {
      sameCnt = 0;
    }
  }

  let sameCnt2 = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) continue;
    const num = nums[i];
    const prevNum = nums[i + 1];

    if (num === prevNum) {
      sameCnt2++;
    } else if (num > prevNum) {
      if (lastIndex === nums.length) {
        lastIndex = i + 1 + sameCnt2;
        break;
      }
      sameCnt2 = 0;
    } else {
      sameCnt2 = 0;
    }
  }

  if (firstIndex === -1) return 0;
  if (lastIndex === nums.length) return nums.length;
  const subArr = nums.slice(firstIndex, lastIndex + 1);
  const minSubArr = Math.min(...subArr);
  const maxSubArr = Math.max(...subArr);
  for (let i = 0; i < firstIndex; i++) {
    const num = nums[i];
    if (num > minSubArr) {
      firstIndex = i;
      break;
    }
  }
  for (let i = nums.length - 1; i > lastIndex; i--) {
    const num = nums[i];
    if (num < maxSubArr) {
      lastIndex = i;
      break;
    }
  }
  return Math.abs(lastIndex - firstIndex + 1);
};
// @lc code=end
