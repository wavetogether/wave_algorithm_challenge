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
function encryption(oneLineStr) {
    // Remove spaces
    const noSpaceStr = oneLineStr.replace(/\s/g, '');

    // Get minimum row x column area
    let numRows = Math.floor(Math.sqrt(noSpaceStr.length));
    const numColumns = Math.ceil(Math.sqrt(noSpaceStr.length));
    if (numRows * numColumns < noSpaceStr.length) numRows++;

    // Read in loop
    let encryptedStr = '';
    for(let i=0; i<numColumns; i++) {
        for(let j=0; j<numRows; j++) {
            const aIndex = i + (j*numColumns);
            if (aIndex < noSpaceStr.length) {
                encryptedStr += noSpaceStr[aIndex];
            }
        }
        encryptedStr += ' ';
    }
    return encryptedStr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
