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
    // IMPORTANT THING - scores: descending, alice: ascending

    // Remove duplicates in scores
    const uniqueScores = [...new Set(scores)];

    // Find alice ranks
    const aliceRank = [];
    let aliceScoreIndex = 0;
    let boardScoreIndex = uniqueScores.length - 1;
    // iteration count <= scores.length + alice.length
    while (boardScoreIndex >= 0) {
        if (aliceScoreIndex >= alice.length) return aliceRank;
        const aBoardScore = uniqueScores[boardScoreIndex];
        const aAliceScore = alice[aliceScoreIndex];
        if (aBoardScore < aAliceScore) {
            if (boardScoreIndex > 0) {
                // Find a board score which is greater than or equal to alice score
                boardScoreIndex--;
            } else {
                // If no board score to compare, alice is the first
                // Leaderboard: [ aAliceScore > score1 > score2 > ...]
                aliceRank.push(1);
                aliceScoreIndex++;
            }
        } else if (aBoardScore === aAliceScore) {
            // Leaderboard: [ ... > score1 === aAliceScore >= score2, ...]
            aliceRank.push(boardScoreIndex + 1);
            aliceScoreIndex++;
        } else if (aBoardScore > aAliceScore) {
            // Leaderboard: [ ... > score1 > aAliceScore > score2, ...]
            aliceRank.push(boardScoreIndex + 2);
            aliceScoreIndex++;
        }
    }
    return aliceRank;
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
