function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;

  let reachableIndex = 0;
  for (let index=0; index<nums.length-1; index++) {
    const maxJumpDistance = nums[index];
    if (index <= reachableIndex) {
      reachableIndex = Math.max(reachableIndex, index + maxJumpDistance);
    }
    if (reachableIndex >= nums.length - 1) return true;
  }
  return false;
};