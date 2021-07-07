'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the getMinimumCost function below.
function getMinimumCost(numBuyer, flowerCosts) {
    // Buy more expensive flowers first
    const ascendingFlowerCosts = flowerCosts
        .map(item => parseInt(item))
        .sort((a,b) => a - b);
    let sumFlowerCosts = 0;
    let flowerIndex = ascendingFlowerCosts.length - 1;
    let greedyCount = 0;
    let numRestFlowers = ascendingFlowerCosts.length;
    while(numRestFlowers > 0) {
        for (let i=0; i<numBuyer; i++) {
            if (flowerIndex >= 0) {
                sumFlowerCosts += ascendingFlowerCosts[flowerIndex] * (greedyCount + 1);
                flowerIndex--;
            }
        }
        greedyCount++;
        numRestFlowers -= numBuyer;
    }
    return sumFlowerCosts;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    const minimumCost = getMinimumCost(k, c);

    ws.write(minimumCost + '\n');

    ws.end();
}
