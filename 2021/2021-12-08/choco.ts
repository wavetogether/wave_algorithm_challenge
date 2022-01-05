// O(nlogn) time solution
function canReorderDoubled(numbers: number[]): boolean {
  // arr로 num-count Map 생성 (Set은 키값 중복되서 안 됨)
  const numCountMap: { [num: number]: number } = {};

  for (const num of numbers) {
    if (numCountMap[num] === undefined) {
      numCountMap[num] = 1;
    } else {
      numCountMap[num]++;
    }
  }

  // 작은 값부터 그 값과 2배인 값 존재하면 그 쌍을 Set에서 제거 (음수는 순서 반대로)
  const ascendingPositiveNumber = numbers
    .filter((num) => num >= 0)
    .sort((a, b) => a - b);
  for (const num of ascendingPositiveNumber) {
    if (numCountMap[num] > 0 && numCountMap[num * 2] > 0) {
      numCountMap[num]--;
      numCountMap[num * 2]--;
    }
  }

  const descendingNegativeNumbers = numbers
    .filter((num) => num < 0)
    .sort((a, b) => b - a);
  for (const num of descendingNegativeNumbers) {
    if (numCountMap[num] > 0 && numCountMap[num * 2] > 0) {
      numCountMap[num]--;
      numCountMap[num * 2]--;
    }
  }

  // 남아있는 숫자가 있으면 false, 없으면 true 반환
  for (const count of Object.values(numCountMap)) {
    if (count > 0) return false;
  }
  return true;
}
