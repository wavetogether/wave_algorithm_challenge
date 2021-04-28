function canCross(stones: number[]): boolean {
  const memo: { [indexAndPreviousJumpUnit: string]: boolean } = {};

  function check(index: number, previousJumpUnit: number): boolean {

    if (index === stones.length - 1) return true;

    const indexAndPreviousJumpUnit = `${index}:${previousJumpUnit}`;
    if (memo[indexAndPreviousJumpUnit] === false) return false;

    let jumpables: { index: number, previousJumpUnit: number }[] = []; 
    for (let i=-1; i<=1; i++) {
      if (previousJumpUnit + i <= 0) continue;
      const a = stones.indexOf(stones[index] + previousJumpUnit + i);
      if (a > -1) {
        jumpables.push({
          index: a,
          previousJumpUnit: previousJumpUnit + i
        });
      }
    }

    if (jumpables.length === 0) {
      memo[indexAndPreviousJumpUnit] = false;
      return false;
    }
    
    const result = jumpables.some(j => check(j.index, j.previousJumpUnit));
    memo[indexAndPreviousJumpUnit] = result;
    return result;
  }

  if (stones[1] !== 1) return false;

  const result = check(1, 1);
  // console.log(memo);
  return result;
};
