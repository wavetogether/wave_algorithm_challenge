function permute(nums: number[]): number[][] {
    if (nums.length <= 1) return [nums];
    if (nums.length === 2) {
        return [[nums[0], nums[1]], [nums[1], nums[0]]];
    } else {
        let result: number[][] = [];
        for (let i=0; i<nums.length; i++) {
            const sliced = [
                ...nums.slice(0, i),
                ...nums.slice(i+1),
            ];
            const rest = permute(sliced);
            for (let j=0; j<rest.length; j++) {
                result.push([
                    nums[i],
                    ...rest[j],
                ]);
            }
        }
        return result;
    }
};
