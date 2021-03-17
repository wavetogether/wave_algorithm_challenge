// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Count Numbers with Unique Digits.
// Memory Usage: 38.8 MB, less than 100.00% of TypeScript online submissions for Count Numbers with Unique Digits.

function countNumbersWithUniqueDigits(n: number): number {
	if (n === 0) {
		return 1;
	} else if (n === 1) {
		return 10;
	}

	let factorial = 1;

	for (let i = 9; i > 10 - n; i--) {
		factorial *= i
	}

	return countNumbersWithUniqueDigits(n-1) + 9 * factorial;
};
