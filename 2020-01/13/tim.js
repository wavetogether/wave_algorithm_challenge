'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the larrysArray function below.
function larrysArray(A) {
    let end = A.length;
    let idx = 0;

    while (idx < end - 2) {
        if (A[idx] == idx+1) {
            //do nothing
        } else {
            if (A.indexOf(idx+1) > idx + 2) {
                rotate(A, A.indexOf(idx+1)-2, 2);
                continue;
            } else if (A.indexOf(idx+1) == idx + 2) {
                rotate(A, idx, 2);
            } else if (A.indexOf(idx+1) == idx + 1) {
                rotate(A, idx, 1);
            }
        }
        idx++;
    }

    if (A[end-1]===end) {
        return 'YES'
    } else {
        return 'NO'
    }    
}

function rotate(A, idx, reps) {
    const left = A[idx];
    const middle = A[idx+1];
    const right = A[idx+2];

    if (reps == 1) {
        A[idx] = middle;
        A[idx+1] = right;
        A[idx+2] = left;
    } else if (reps ==2) {
        A[idx] = right;
        A[idx+1] = left;
        A[idx+2] = middle;
    }
    return A;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        let result = larrysArray(A);

        ws.write(result + "\n");
    }

    ws.end();
}
