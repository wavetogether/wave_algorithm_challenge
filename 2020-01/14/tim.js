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
function isValid(s) {
    let buffer = {};

    for (let char of s) {
        if (!buffer[char]) {
            buffer[char] = 1
        } else {
            buffer[char]++;
        }
    }

    let freq;
    let except;
    let keys = Object.keys(buffer);

    if (buffer[keys[0]] == buffer[keys[1]]) {
        freq = buffer[keys[0]];
        except = buffer[keys[2]];
    } else if (buffer[keys[0]] == buffer[keys[2]]) {
        freq = buffer[keys[0]];
        except = buffer[keys[1]];
    } else if (buffer[keys[1]] == buffer[keys[2]]) {
        freq = buffer[keys[1]];
        except = buffer[keys[0]];
    } else {
        return 'NO'
    }

    if (Math.abs(freq - except) > 1) {
        return 'NO'
    }

    let flag = false;

    for (let idx in buffer) {
        if (buffer[idx] != freq) {
            if (flag) {
                return 'NO'
            } else {
                flag = true;
            }
        }
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
