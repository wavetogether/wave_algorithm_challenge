// Runtime: 88 ms, faster than 57.14% of TypeScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 40.5 MB, less than 52.38% of TypeScript online submissions for Increasing Triplet Subsequence.

function increasingTriplet(nums: number[]): boolean {
	const NUM_MAX = Math.pow(2, 31) - 1;
	const triplet = [NUM_MAX, NUM_MAX];

	for (const num of nums) {
		if (num > triplet[1]) {
			return true;
		} else if (num <= triplet[0]) {
			triplet[0] = num;
		} else if (num <= triplet[1]) {
			triplet[1] = num;
		}
	}
	return false;
};
