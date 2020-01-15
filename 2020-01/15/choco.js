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

// Complete the formingMagicSquare function below.
function formingMagicSquare(square3by3) {
    // 직접 그려보면 3X3 마방진은 사실 하나고 뒤집기/돌리기 해서 8가지 가능하다
    // - 가운데 값을 포함한 가로/세로/대각선1/대각선2 합 방정식을 통해 가운데 값은 5
    // - 모서리에 1 넣으면 완성 불가능
    // - 옆면에 1 넣으면 답은 하나밖에 안 나온다
    const MAGIC_SQUARES = [
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6]
    ];

    // 1차 배열로 변환
    const squareArr = [...square3by3[0], ...square3by3[1], ...square3by3[2]];

    // 8가지 마방진 중에 현재 상태와 가장 차이가 적을 떄 비용 구하기
    const diffs = MAGIC_SQUARES.map(magicSquare => squareArr.reduce(
        (acc, val, i) => acc + Math.abs(val - magicSquare[i]),
        0
    ));
    return Math.min(...diffs);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
