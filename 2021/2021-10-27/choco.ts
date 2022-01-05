/* 93. Restore IP Addresses, https://leetcode.com/problems/restore-ip-addresses/ */

// Runtime: 80 ms, faster than 85.00% of TypeScript online submissions for Restore IP Addresses.
// Memory Usage: 40.8 MB, less than 70.00% of TypeScript online submissions for Restore IP Addresses.

function restoreIpAddresses(s: string): string[] {
	const result = [];

	if (s.length < 4 || 12 < s.length) return result;

	for (let i = 1; i <= 3 && i <= s.length - 3; i++) {

		const first = s.slice(0, i);
		if (!isValidDigit(first)) break;

		for (let j = i + 1; j <= i + 3 && j <= s.length - 2; j++) {

			const second = s.slice(i, j);
			if (!isValidDigit(second)) break;

			for (let k = j + 1; k <= j + 3 && k <= s.length - 1; k++) {

				const third = s.slice(j, k);
				if (!isValidDigit(third)) break;

				const forth = s.slice(k);
				if (!isValidDigit(forth)) continue;

				// all passed
				result.push(`${first}.${second}.${third}.${forth}`);
			}
		}
	}

	return result;
};

function isValidDigit(digit: string): boolean {
	const digitNumber = parseInt(digit);
	// if not a number
	if (digitNumber === NaN) return false;
	// if starts with 0
	if (digit.length > 1 && digit[0] === '0') return false;
	// if out of range
	return digitNumber <= 255;
}