// Runtime: 68 ms, faster than 85.71% of TypeScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 38 MB, less than 100.00% of TypeScript online submissions for Find First and Last Position of Element in Sorted Array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums: number[], target: number): number[] {
  let indices = [0, nums.length - 1];
  let targetIndex = -1;

  // Exceptions for nums.length = 1
  if (nums.length == 1) {
    if (nums[indices[0]] === target) return [0,0];
    else return [-1,-1];
  }

  // Binary search the target value
  while(indices[0] <= indices[1]) {    
    if (indices[0] === indices[1]) {
      if (nums[indices[0]] === target) return [0,0];
      break;
    }

    const medianIndex = Math.ceil((indices[0] + indices[1])/2);
    const medianValue = nums[medianIndex];
    const offset = Math.ceil((indices[1] - indices[0])/2);

    if (medianValue === target) {
      targetIndex = medianIndex;
      break;
    } else if (medianValue > target) {
      indices[1] -= offset;
    } else if (medianValue < target) {
      indices[0] += offset;
    }
  }

  // Target value DNE
  if (targetIndex === -1) {
    return [-1, -1];
  }

  indices = [targetIndex, targetIndex];

  // Search left
  for (let i=targetIndex; i>=0; i--) {
    if (nums[i] < target) {
      indices[0] = i+1;
      break;
    } else if (i === 0) {
      indices[0] = i;
    }
  }

  // Search right
  for (let i=targetIndex; i<=nums.length-1; i++) {
    if (nums[i] > target) {
      indices[1] = i-1;
      break;
    } else if (i === nums.length-1) {
      indices[1] = i;
    }
  }

  return indices;
};
