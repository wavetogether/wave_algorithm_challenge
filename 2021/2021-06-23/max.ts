function openLock(deadends: string[], target: string): number {
    let locker = '0000';

    const queue: [{current:string, depth:number}] = [{current: locker, depth:0}];
    const map = new Map();
    // is resolve
    if(locker === target) {
        return 0;
    }

    while(queue.length > 0) {
        const data = queue.shift();

        // check can open ?
        if(data === undefined || deadends.some(value => data.current === value)) continue;
        else if(data.current === target) return data.depth;

        [0,1,2,3].forEach(index => {
            let current = data.current;
            let depth = data.depth;

            [true, false].forEach(vector => {
                const nextLocker = getNextCase(current, index, vector);
                if(!map.has(nextLocker) && !deadends.some(value => nextLocker === value)) {
                    queue.push({ current:nextLocker, depth:depth+1});
                    map.set(nextLocker, depth+1);
                }
            })
        })
    }

    return -1;
}

function getNextCase(locker:string, index:number, vector: boolean) : string {
    let num = parseInt(locker[index]);

    if(vector) {
        num = num === 9 ? 0 : num+1;
    } else {
        num = num === 0 ? 9 : num-1;
    }

    return locker.substr(0,index) + num + locker.substr(index+1,locker.length);
}
