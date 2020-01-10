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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let currentRanking = [];

    let rankVal = 0;
    let prevScore = -1;

    for (let idx in scores) {
        if (scores[idx] == prevScore) {
            currentRanking.push(rankVal);
        } else {
            currentRanking.push(++rankVal);
            prevScore = scores[idx];
        }
    }

    let ret = [];
    let currentRankIdx = 0;

    for (let idx in alice) {
        let pts = alice[alice.length - 1 - idx];

        while (currentRankIdx <= currentRanking.length) {
            console.log(scores[currentRankIdx]);

            if (currentRankIdx == currentRanking.length) { // termination condition
                ret.unshift(currentRanking[currentRankIdx-1]+1);
                break;
            } else if (pts > scores[currentRankIdx]) {
                if (currentRankIdx == 0) {
                    ret.push(1);
                } else {
                    ret.unshift(currentRanking[currentRankIdx]);   
                }
                break;
            } else if (pts == scores[currentRankIdx]) {
                ret.unshift(currentRanking[currentRankIdx]);
                break;
            } else {
                currentRankIdx++;
            }
        }
    }

    return ret;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
