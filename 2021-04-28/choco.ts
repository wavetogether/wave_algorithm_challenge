function canCross(stones: number[]): boolean {
    let notJumpables: { currentIndex: number, prevJumpUnit: number }[] = [];
    function check(currentIndex: number, prevJumpUnit: number) {
        // console.log(`check(${currentIndex}, ${prevJumpUnit})`);
        // 종료 조건
        if (currentIndex === stones.length - 1) return true;
        // 가능한 돌들 찾기
        const jumpables: { nextIndex: number, jumpUnit: number }[] = [];
        for (let i=1; i<=prevJumpUnit+1; i++) {
            const jumpUnit = stones[currentIndex + i] - stones[currentIndex];
            // console.log('jumpUnit:', jumpUnit);
            if (jumpUnit >= prevJumpUnit - 1 && jumpUnit <= prevJumpUnit+1) {
                const isNotJumpable = notJumpables.find(nj => {
                    return nj.currentIndex === currentIndex + i && nj.prevJumpUnit === jumpUnit;
                });
                if (!isNotJumpable) jumpables.push({ nextIndex: currentIndex + i, jumpUnit });
            }
            // 효율
            if (jumpUnit > prevJumpUnit + 1) break;
        }
        // console.log('jumpables', jumpables);
        if (jumpables.length === 0) {
            notJumpables.push({ currentIndex, prevJumpUnit });
            return false;
        }
        return jumpables.some(j => check(j.nextIndex, j.jumpUnit));
    }
    if (stones[1] !== 1) return false;
    return check(1, 1);
};

