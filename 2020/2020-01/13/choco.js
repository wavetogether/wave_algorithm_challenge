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
function larrysArray(testArray) {

    // When moving minimum value to left,
    // ordering changes when minIndex is on odd index.
    // On that case, first 2 elements changes their locations.
    // Decrease length by this logic until length is 3.
    while (testArray.length > 3) {
        const min = Math.min(...testArray);
        const minIndex = testArray.indexOf(min);
        testArray = testArray.filter(e => e !== min);
        if (minIndex % 2 === 1) {
            testArray.splice(1, 0, testArray.shift());
        }
    }

    // Here, testArray.length must be 3
    // Then check Larry's array while rotating
    const orderedArray = testArray.map(e => parseInt(e)).sort((a, b) => a - b);
    if (checkTwoArraysAreEqual(testArray, orderedArray)) return 'YES';
    testArray.push(testArray.shift());  // rotate
    if (checkTwoArraysAreEqual(testArray, orderedArray)) return 'YES';
    testArray.push(testArray.shift());  // rotate
    if (checkTwoArraysAreEqual(testArray, orderedArray)) return 'YES';

    return 'NO';
}

function checkTwoArraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
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
