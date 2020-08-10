function searchRange(nums: number[], target: number): number[] {
	const from = lowerBound(nums, target);
	if (from === nums.length || nums[from] !== target) {
		return [-1, -1];
	}
	const to = lowerBound(nums, target + 1, from);
	return [from, to - 1];
}

function lowerBound(nums: number[], target: number, from: number = 0, to: number = nums.length): number {
	while (from < to) {
		let mid = (from + to) >> 1;
		if (target <= nums[mid]) {
			to = mid;
		} else {
			from = mid + 1;
		}
	}
	return to;
}
