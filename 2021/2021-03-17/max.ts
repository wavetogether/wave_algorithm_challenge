function countNumbersWithUniqueDigits(n: number): number {
    if(n==0) return 1;
        
    let sum = 0; // sum = 10 + 9*9 + 9*9*8 ... 
    for(let i=1; i<=n; i++) {
        sum += countCases(i);
    }
    return sum;
};

function countCases(n: number): number {
    if (n==1) return 10;
    
    let remain = 9;
    let result = 9;
    while(n>1) {
        result *= (remain--);
        n--;
    }
    return result;
};
