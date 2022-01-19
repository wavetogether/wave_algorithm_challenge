// Runtime: 464 ms, faster than 100.00% of TypeScript online submissions for Find Kth Bit in Nth Binary String.
// Memory Usage: 73.6 MB, less than 100.00% of TypeScript online submissions for Find Kth Bit in Nth Binary String.

function findKthBit(n: number, k: number): string {
    const array: string[] = ["0"];
    
    const invertReverse = (str: string): string => {
        let start = 0, end = str.length - 1;
        
        const arr = Array.from(str);
        
        while (start <= end) {
            const temp = arr[start] === '1' ? '0' : '1';
            arr[start] = arr[end] === '1' ? '0' : '1';
            arr[end] = temp;
            start += 1;
            end -= 1;
        }
        
        return arr.join('');
    }
    
    for (let i=1 ; i<n; i++) {
        array.push(`${array[i-1]}1${invertReverse(array[i-1])}`);
    }
    
    return array[n-1].charAt(k-1);
};
