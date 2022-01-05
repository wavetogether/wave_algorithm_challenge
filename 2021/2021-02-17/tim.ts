// Runtime: 6244 ms, faster than 7.69% of TypeScript online submissions for Count of Smaller Numbers After Self.
// Memory Usage: 63.5 MB, less than 15.38% of TypeScript online submissions for Count of Smaller Numbers After Self.

function countSmaller(nums: number[]): number[] {
    const getSortedArraryIndex = (num: number): number => {
        let start = 0;
        let end = sortedArray.length;

        while (start < end) {
            const middle = Math.floor(start + (end - start) / 2);

            if (sortedArray[middle] >= num) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }

        return start;
    }

    if (nums.length === 1) return [0];
    
    let sortedArray: number[] = [];
    let output: number[] = [];
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const insertionIndex = getSortedArraryIndex(nums[i]);
        sortedArray.splice(insertionIndex, 0, nums[i]);
        output.unshift(insertionIndex);
    }
    
    return output;
};
