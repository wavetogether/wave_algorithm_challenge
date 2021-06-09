// Constraints
// - 1 <= nums.length <= 2 * 10^4
// -1000 <= nums[i] <= 1000
// -10^7 <= k <= 10^7

function subarraySum(nums: number[], k: number): number {
  let resultCount = 0;

  // sum(0, i)를 인덱스 i에 저장하는 배열
  const sumsFromFirst = [];
  let sumFromFirst = 0;
  nums.forEach(num => {
    sumFromFirst += num;
    sumsFromFirst.push(sumFromFirst);
  });

  // sum(i, j) 구하는 함수
  // sum(i, j) = sum(0, j) - sum(0, i-1)
  function sumFromToIndex(from: number, to: number): number {
    if (from === 0) return sumsFromFirst[to];
    if (from === to) return nums[from];
    else return sumsFromFirst[to] - sumsFromFirst[from - 1];
  }

  // 모든 subarray 확인
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<nums.length-i; j++) {
      if (sumFromToIndex(i, i+j) === k) resultCount++;
    }
  }

  return resultCount;
};

console.log(subarraySum([1, 1, 1], 2), 'must be 2');
console.log(subarraySum([1, 2, 3], 3), 'must be 2');