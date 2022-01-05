function openLock(deadends: string[], target: string): number {
	// increase when wheeling up/down
	let turningWheelCount = 0;
	// starting position
	const initialValue = '0000';
	// set of dead ends + passed nodes
	const invalidValues: Set<String> = new Set([...deadends]);
	// queue for BFS
	const valuesInNthTurn: string[] = [initialValue];

	while (valuesInNthTurn.length > 0) {
		const valuesInNthTurnCount = valuesInNthTurn.length;
		for (let i=0; i<valuesInNthTurnCount; i++) {
			const value = valuesInNthTurn.pop()!;
			if (value === target) {
				return turningWheelCount;
			}
			if (!invalidValues.has(value)) {
				invalidValues.add(value);
				for (let j=0; j<target.length; j++) {
					const wheeledUpValue = value.substring(0, j) + ((Number(value[j]) + 1) % 10) + value.substring(j + 1);
					const wheeledDownValue = value.substring(0, j) + ((Number(value[j]) + 9) % 10) + value.substring(j + 1);
					valuesInNthTurn.unshift(wheeledUpValue);
					valuesInNthTurn.unshift(wheeledDownValue);
				}
			}
		}
		turningWheelCount++;
	}
	// cannot open
	return -1;
};


// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
console.log(openLock(["0201","0101","0102","1212","2002"], "0202"), 'must be 6');

// Input: deadends = ["8888"], target = "0009"
// Output: 1
console.log(openLock(["8888"], "0009"), 'openLock(["8888"], "0009") must be 1');

// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"), 'must be -1');

// Input: deadends = ["0000"], target = "8888"
// Output: -1
console.log(openLock(["0000"], "8888"), 'must be -1');
