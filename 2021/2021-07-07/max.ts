function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const arr:number[][] = [];

    // priorityQueue에 넣으면 성능이 더 좋을듯..? 
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const pair = [nums1[i], nums2[j]];
            arr.push(pair);
        }
    }

    const result = arr.sort((p1,p2) => {
        const p1Sum = p1[0] + p1[1];
        const p2Sum = p2[0] + p2[1];
        if( p1Sum > p2Sum) return 1;
        else if (p1Sum == p2Sum && p1[0] > p2[0]) return 1;
        else return -1;
    })
    
    return result.slice(0,k);
};
