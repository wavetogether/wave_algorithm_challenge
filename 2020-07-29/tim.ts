// Runtime: 88 ms, faster than 33.33% of TypeScript online submissions for Next Permutation.
// Memory Usage: 38.1 MB, less than 100.00% of TypeScript online submissions for Next Permutation.

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const swap = (i: number, j:number) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    const length = nums.length;

    let index_i = -1;

    // find the first decreasing number, x
    for (let i = length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index_i = i;
            break;
        }
    }

    if (index_i === -1) { // in case of already in descending order
        for (let i = 0; i < length / 2; i++) {
            swap(i, length - 1 - i);
        }
        return;
    }

    let index_j = length - 1;

    // find the number just greater than x
    for (let i = index_i; i <= length - 2; i++) {
        if (nums[index_i] >= nums[i + 1] ) {
            index_j = i;
            break;
        }
    }

    // swap
    swap(index_i, index_j);

    // reverse
    for (let i = 0; i < (length - 1 - index_i) / 2; i++) {
        // console.log(index_i + 1 + i, length - 1 - i);
        swap(index_i + 1 + i, length - 1 - i);
    }
};
