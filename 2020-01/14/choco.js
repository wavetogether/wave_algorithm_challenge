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

// Complete the isValid function below.
function isValid(str) {
    console.log(str);
    // sort
    const sortedStr = str.split('').sort().join('');

    // 글자가 바뀔 때 그 글자 개수를 letterCountsCounts에 추가
    // ex) aabbccddefg => letterCountsCounts = { '1': 3, '2': 4 }
    const letterCountsCounts = {};
    let letterCounter = 1;
    for (let i=0; i<sortedStr.length; i++) {
        const curr = sortedStr[i]
        const next = i+1 < sortedStr.length ? sortedStr[i+1] : '';
        if (curr === next) {
            letterCounter++;
        } else {
            if (letterCountsCounts[letterCounter] === undefined) {
                Object.assign(letterCountsCounts, { [letterCounter]: 1 });
            } else {
                letterCountsCounts[letterCounter]++;
            }
            letterCounter = 1;
        }
    }

    // 결과 판단
    const letterCountsCountsLength = Object.keys(letterCountsCounts).length;
    // 개수가 모두 같을 경우 YES
    if (letterCountsCountsLength === 1) return 'YES';
    if (letterCountsCountsLength === 2) {
        const letterCountsKeys = Object.keys(letterCountsCounts);
        const key0 = parseInt(letterCountsKeys[0]);
        const key1 = parseInt(letterCountsKeys[1]);
        // 한 종류의 알파벳이 1개만 존재할 경우 제거하면 사라지므로 YES
        // letterCountsCounts = { '1': 1, 'N': M }
        if ((key0 === 1 && letterCountsCounts[key0] === 1) ||
            (key1 === 1 && letterCountsCounts[key1] === 1)) {
            return 'YES';
        }
        // 서로 다른 개수의 차이가 1이고, 둘 중 더 큰 개수가 다른 것과 1개 차이날 때 YES
        // letterCountsCounts = { 'n': m, 'n+1': 1 }
        if ((key0 - key1 === 1 && letterCountsCounts[key0] === 1) ||
            (key1 - key0 === 1 && letterCountsCounts[key1] === 1)) {
            return 'YES';
        }
    }
    return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
