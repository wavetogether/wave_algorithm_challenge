function combinationSum(candidates: number[], target: number): number[][] {
	const out: number[][] = [];
	go(out, candidates, [], 0, 0, target);
	return out;
}
function go(out: number[][], candidates: number[], current: number[], sum: number, index: number, target: number) {
	if (sum == target) {
		out.push(current.slice());
		return;
	}
	if (index == candidates.length || sum > target) return;

	current.push(candidates[index]);
	go(out, candidates, current, sum + candidates[index], index, target);
	current.pop();

	go(out, candidates, current, sum, index + 1, target);
}
