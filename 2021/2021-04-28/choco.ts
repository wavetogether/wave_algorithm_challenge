function canCross(stones: number[]) : boolean {
  if (stones[1] !== 1) return false;

  const crossingMap = new Map<number, Set<number>>();
  stones.forEach(s => crossingMap.set(s, new Set()));
  crossingMap.get(0)?.add(1);

  for (let i = 0; i < stones.length - 1; i++) {
    const currentPosition = stones[i];
    const jumpUnits = [...crossingMap.get(currentPosition)!];
    for (const jumpUnit of jumpUnits) {
      const nextPosition = currentPosition + jumpUnit;
      if (nextPosition === stones[stones.length - 1]) {
        return true;
      }
      const nextJumpUnits = crossingMap.get(nextPosition);
      if (nextJumpUnits !== undefined) {
        if (jumpUnit - 1 > 0) nextJumpUnits.add(jumpUnit - 1);
        nextJumpUnits.add(jumpUnit);
        nextJumpUnits.add(jumpUnit + 1);
      }
    }
  }

  return false;
}
