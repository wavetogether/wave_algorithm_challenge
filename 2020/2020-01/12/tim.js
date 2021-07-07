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

// Complete the encryption function below.
function encryption(s) {
    const l = s.length;
    let row = Math.trunc(Math.sqrt(l));
    const col = (row == Math.sqrt(l))? row : row + 1
    
    if (row * col < l) {
        row++;
    }

    let input = s.replace(/ /g,'');
    let ret = '';

    for (let colIdx=0; colIdx<col; colIdx++) {
        for (let rowIdx=0; rowIdx<row; rowIdx++) {
            ret += input[rowIdx * col + colIdx]? input[rowIdx * col + colIdx]: '';
        }
        ret += ' '
    }
    return ret;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
