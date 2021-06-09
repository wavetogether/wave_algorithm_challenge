function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let sum = 0;
  const sumFromFirstCounts: { [sum: number]: number } = {};

  /**
   * 핵심 원리
   * - 인덱스 i부터 j까지 합을 sum(i, j)라고 할 때
   * - sum(i, j) = sum(0, j) - sum(0, i-1)
   * - 루프를 돌면서 현재까지 저장된 sum들과 비교하여 카운트한다
   */
  nums.forEach(num => {
    // sum(0, j)
    sum += num;

    // 현재 합이 k이면 카운트
    if (sum === k) result++;

    // sum(0, j) - sum(0, i-1) === k 만족시키는 경우의 수 세서 더하기
    result += (sumFromFirstCounts[sum - k] || 0);

    // sumFromFirstCounts에 추가
    if (sumFromFirstCounts[sum] !== undefined) sumFromFirstCounts[sum]++;
    else sumFromFirstCounts[sum] = 1;
  });

  return result;
}
