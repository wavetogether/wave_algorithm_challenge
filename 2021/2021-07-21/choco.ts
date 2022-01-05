function findRadius(houses: number[], heaters: number[]): number {
	const MAX_DISTANCE = 10 ** 9;

	houses.sort();
	heaters.sort();

	const shortests = [];
	houses.forEach(house => {
		let shortest = MAX_DISTANCE;
		heaters.forEach(heater => {
			const distance = Math.abs(house - heater);
			if (distance < shortest) shortest = distance;
		});
		shortests.push(shortest);
	});
	return Math.max(...shortests);
}