// Description:
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// Constraints:
// 1 <= n <= 10^5
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Follow up:
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

function findDuplicate(nums: number[]): number {
	const checkList: boolean[] = new Array(10 ** 5 + 1);
	for (let i=0; i<nums.length; i++) {
		const num = nums[i];
		if (checkList[num] === true) return num;
		checkList[num] = true;
	}
	return -1; 
};

// Runtime: 88 ms, faster than 97.98% of TypeScript online submissions for Find the Duplicate Number.
// Memory Usage: 50.4 MB, less than 53.54% of TypeScript online submissions for Find the Duplicate Number.