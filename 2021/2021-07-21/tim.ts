// Runtime: 3572 ms, faster than 100.00% of TypeScript online submissions for Heaters.
// Memory Usage: 43.7 MB, less than 100.00% of TypeScript online submissions for Heaters.

function findRadius(houses: number[], heaters: number[]): number {
  let minRadius = 0;

  houses.forEach(house => {
    let distance = Number.MAX_VALUE;

    heaters.forEach(heater => {
      if (Math.abs(heater - house) < distance) distance = Math.abs(heater - house);
    });

    if (minRadius < distance){
      minRadius = distance;
    }
  });

  return minRadius;
};

const examples = [
  {
    input: {
      houses: [1,2,3],
      heaters: [2]
    },
    output: 1
  },
  {
    input: {
      houses: [1,2,3,4],
      heaters: [1,4]
    },
    output: 1
  },
  {
    input: {
      houses: [1,5],
      heaters: [2]
    },
    output: 3
  },
];

examples.forEach(example => {
  const result = findRadius(example.input.houses, example.input.heaters);
  console.log(JSON.stringify(example.output) === JSON.stringify(result) ? 'PASS' : `FAIL: ${JSON.stringify(result)} (actual) ${JSON.stringify(example.output)} (expected)`);
});
