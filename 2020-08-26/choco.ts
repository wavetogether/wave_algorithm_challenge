function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  const findAllCombinations = function findCombination(
    combination: number[],
    sum: number,
    candidateIndex: number,
  ) {
    // Termination
    if (sum === target) return combinations.push(combination);
    if (sum > target || candidateIndex >= candidates.length) return;

    // Find with this candidate
    const candidate = candidates[candidateIndex];
    findCombination(
      [...combination, candidate],
      sum + candidate,
      candidateIndex
    );

    // Find without this candidate
    findCombination(
      combination,
      sum,
      candidateIndex + 1
    );
  }
  findAllCombinations([], 0, 0);

  return combinations;
};
