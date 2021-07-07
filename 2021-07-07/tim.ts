// Runtime: 348 ms, faster than 100.00% of TypeScript online submissions for Find K Pairs with Smallest Sums.
// Memory Usage: 79.5 MB, less than 100.00% of TypeScript online submissions for Find K Pairs with Smallest Sums.

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const pairSum = [];

  for (let i=0; i<nums1.length; i++) {
    for (let j=0; j<nums2.length; j++) {
      pairSum.push({ n: nums1[i], m: nums2[j], sum: nums1[i] + nums2[j] });
    }
  }
  pairSum.sort((a,b) => a.sum < b.sum ? -1 : 1);

  return pairSum.slice(0,k).map((pair) => [pair.n, pair.m]);
};

const examples = [
  {
    input: {
      nums1: [1,7,11],
      nums2: [2,4,6],
      k: 3
    },
    output: [[1,2],[1,4],[1,6]]
  },
  {
    input: {
      nums1: [1,1,2],
      nums2: [1,2,3],
      k: 2
    },
    output: [[1,1],[1,1]]
  },
  {
    input: {
      nums1: [1,2],
      nums2: [3],
      k: 3
    },
    output: [[1,3],[2,3]]
  },
];

examples.forEach(example => {
  const result = kSmallestPairs(example.input.nums1, example.input.nums2, example.input.k);
  console.log(JSON.stringify(example.output) === JSON.stringify(result) ? 'PASS' : `FAIL: ${JSON.stringify(result)} (actual) ${JSON.stringify(example.output)} (expected)`);
});
