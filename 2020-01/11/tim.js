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
function getMinimumCost(k, c) {
    c.sort((a,b) => a - b);
    console.log(c)
    return buyFlower(k, c, 0, {}); // recursive fn
}

function buyFlower(friends, costs, totalPrice, purchases) {
    if (costs.length === 0) { // all flowers bought
        return totalPrice;
    } else { // buy the most expensive flower with lowest purchase count
        const lowestPurchaseCount = getLowestPurchaseCount(purchases, friends);

        totalPrice += (lowestPurchaseCount + 1) * costs[costs.length-1];

        if (purchases[lowestPurchaseCount]) {
            purchases[lowestPurchaseCount]++;
        } else {
            purchases[lowestPurchaseCount] = 1;
        }
        // purchases[lowestPurchaseCount] = purchases[lowestPurchaseCount] + 1 || 1;
        costs.splice(costs.length-1,costs.length);
        return buyFlower(friends, costs, totalPrice, purchases);
    }
}

function getLowestPurchaseCount(purchases, friends) {
    let idx = 0;
    while(true) {
        if (purchases[idx]) {
            if (purchases[idx] < friends) {
                return idx;
            } else {
                idx++;
                continue;
            }
        } else {
            return idx;
        }
    } 
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
