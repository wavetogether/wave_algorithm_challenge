function brokenCalc(startValue: number, target: number): number {
	// 곱셈 횟수
	let multiplicationCounts = 0;
	// 뺄셈 횟수
	let subtractionCounts = 0;
	// 나머지? 횟수
	let remainderCounts = 0;

	// 커질 때까지 x2 이후 같아질 때까지 -1
	while (startValue < target) {
		startValue *= 2;
		multiplicationCounts++;
	}
	while (startValue > target) {
		startValue--;
		subtractionCounts++;
	}

	// 2n개의 뺄셈 연산은 이전 곱셈 연산 전에 
	for (let i = 0; i < multiplicationCounts; i++) {
		remainderCounts += subtractionCounts % 2;
		subtractionCounts = Math.floor(subtractionCounts / 2);
	}

	return multiplicationCounts + subtractionCounts + remainderCounts;
};
