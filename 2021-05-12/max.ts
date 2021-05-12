function numberOfBoomerangs(points: number[][]): number {
    // choose 3, not same
    // i == j and i == k
    // plus 1
     
    var total = 0;
    
    for(let i=0;i<points.length;i++) {
        const distanceMap = new Map<number, number[]>();
        for(let j=0;j<points.length;j++) {
            if(i===j) continue;

            const distance = getDistance(points[i], points[j]);

            const value = distanceMap.get(distance);
            if(!value) {
                distanceMap.set(distance, [j]);
                
            } else {
                distanceMap.set(distance, [...value,j]);
            }
            // console.log(distanceMap.values(), key, value);
        }

        for( const [key, value] of distanceMap) {
            if(!value || value.length < 2) continue;
            
            const caseCount = value.length * (value.length-1);
            //console.log(key, caseCount);
            total += caseCount;
        }
    }
    
    return total;
};

function getDistance(a: number[], b:number[]): number {
    return Math.sqrt(Math.pow(Math.abs(a[0]-b[0]),2) + Math.pow(Math.abs(a[1]-b[1]),2));
}
