function nextPermutation(nums: number[]): void {
	reverse(nums, 0, nums.length - 1);
	let to = 0;
	while (to + 1 < nums.length) {
		if (nums[to] > nums[to + 1]) break;
		to++;
	}

	if (to + 1 < nums.length) {
		let s = 0;
		while (true) {
			if (nums[to + 1] < nums[s]) break;
			s++;
		}
		swap(nums, s, to + 1);
	}

	let from = 0;
	while (from < to) {
		swap(nums, from++, to--);
	}
	reverse(nums, 0, nums.length - 1);
};

function reverse(a: number[], from: number, to: number) {
	while (from < to) {
		swap(a, from++, to--);
	}
}

function swap(a: number[], from: number, to: number) {
	const temp = a[from];
	a[from] = a[to];
	a[to] = temp;
}
