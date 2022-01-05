function numRescueBoats(people: number[], limit: number): number {
	// 전체 인원에서 limit보다 크지 않은 쌍의 최대 개수를 뺀다.
	// 최대 개수는 정렬한 후 최솟값+최댓값 구하듯이(?) 한다
	let boatsCount = people.length;
	let left = 0;
	let right = people.length - 1;
	const sortedWeights = people.sort((a, b) => a - b);
	while (left < right) {
		const leftWeight = sortedWeights[left];
		const rightWeight = sortedWeights[right];
		if (leftWeight + rightWeight > limit) {
			right--;
		} else {
			left++;
			right--;
			boatsCount--;
		}
	}
	return boatsCount;
};
