// Runtime: 248 ms, faster than 66.67% of TypeScript online submissions for Number of Boomerangs.
// Memory Usage: 45.4 MB, less than 66.67% of TypeScript online submissions for Number of Boomerangs.

// Map 대신 Object 사용 시 (관련 글: https://medium.com/@bretcameron/how-javascript-maps-can-make-your-code-faster-90f56bf61d9d)
// Runtime: 1696 ms, faster than 33.33% of TypeScript online submissions for Number of Boomerangs.
// Memory Usage: 74.3 MB, less than 16.67% of TypeScript online submissions for Number of Boomerangs.

function numberOfBoomerangs(points: number[][]): number {
    let boomerangs = 0;

    for (let i = 0; i < points.length; i++) {
        const ranges = new Map();

        for (let j = 0; j < points.length; j++){
            const distance = getDistance(points[i], points[j]);

            if (ranges.has(distance)) {
                ranges.set(distance, ranges.get(distance) +1);
            } else {
                ranges.set(distance, 1);
            }
        }

        for (let value of ranges.values()) {
            if (value > 1) {
                boomerangs += value * (value - 1);
            }
        };
    }

    return boomerangs;
};

function getDistance(x: number[], y: number[]): number {
    return Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2));
}

const examples = [
    {
        question: [[0, 0], [1, 0], [2, 0]],
        answer: 2
    },
    {
        question: [[1,1],[2,2],[3,3]],
        answer: 2
    },
    {
        question: [[1,1]],
        answer: 0
    },
];

examples.forEach(example => {
    const result = numberOfBoomerangs(example.question);
    console.log(example.answer === result ? 'PASS' : `FAIL: ${result} (actual) ${example.answer} (expected)`);
})
