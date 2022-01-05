function countNumbersWithUniqueDigits(n: number): number {
    if (n === 0) return 1;  // 10^0 === 1 ...
    let count = 0;
    for (let i=1; i<=n; i++) {
        result += countUniqueNumbersWithLength(i);
    }
    return count;
};

function countUniqueNumbersWithLength(length: number): number {
    if (length === 0) return 0;
    if (length === 1) return 10;
    // if (length === 2) return 9 * 9;
    // if (length === 3) return 9 * 9 * 8;
    // if (length === 4) return 9 * 9 * 8 * 7;
    // ...
    if (length > 10) return 0;
    
    let count = 9;
    for (let i=0; i<length-1; i++) {
        count = count * (9 - i);
    }
    return count;
}

// Time Limit Exceeded
function try1(n: number): number {
    let count = 0;
    for (let i=0; i<10**n; i++) {
        const digits: number[] = [];
        let j=i;
        while (j > 0) {
            const digit = j % 10;
            if (digits.indexOf(digit) > -1) break;
            digits.push(digit);
            j = Math.floor(j / 10);
        }
        if (j === 0) {
            // console.log(i);
            count++;
        }
    }
    return count;
}
    
// Time Limit Exceeded
function try2(n: number): number {
    let count = 0;
    for (let i=0; i<10**n; i++) {
        let isUnique = true;
        for (let j=0; j<10; j++) {
            if (countNumberOccurrence(j, i) > 1) isUnique = false; 
        }
        if (isUnique) count++;
    }
    return count;
};

function countNumberOccurrence(a: number, b: number): number {
    return b.toString().split(a.toString()).length - 1;
}
