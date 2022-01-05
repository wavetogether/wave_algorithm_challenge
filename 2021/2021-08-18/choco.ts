function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {

	// n: 좌석 행 수
	const MEMBERS_COUNT_PER_FAMILY = 4;
	// 좌석 열 범위: 1 ~ 10
	const LEFT_END = 0;
	const RIGHT_END = 11;

	let familiesCount = 0;

	const reserved = {};
	for (let i=1; i<=n; i++) {
		reserved[i] = [];
	}
	
	for (let i=0; i<reservedSeats.length; i++) {
		const [row, column] = reservedSeats[i];
		reserved[row].push(column);
	}

	for (const row in reserved) {
		const a = [2, 3, 4, 5, 6, 7, 8, 9];
		const reservedByRow = reserved[row];
		const b = a.filter(n => !reservedByRow.includes(n));
		const c = b.join('');
		if (c.indexOf('23456789') >= 0) familiesCount += 2;
		else if (c.indexOf('2345') >= 0) familiesCount += 1;
		else if (c.indexOf('4567') >= 0) familiesCount += 1;
		else if (c.indexOf('6789') >= 0) familiesCount += 1;
	}

	return familiesCount;
};
