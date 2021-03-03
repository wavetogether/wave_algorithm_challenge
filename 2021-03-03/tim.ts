const fs = require('fs');

// Read input file
const input: string = fs.readFileSync('/dev/stdin', 'utf8');
const rows: string[] = input.trim().split('\n');

// Remove first line and parse H and W
const dimensions: number[] = rows.shift().split(' ').map(dimensions => Number(dimensions));
const H = dimensions[0];
const W = dimensions[1];

let output = 0;

// Check every element (except the walls)
for (let h = 1; h < H; h++) {
  for (let w = 1; w < W; w++) {
    let count = 0;

    // For each element, check upper left 2X2 matrix
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (rows[h - i][w - j] === '#') {
          count++;
        }
      }
    }

    // If count is odd, it is a right angle
    if (count % 2 === 1) {
      output++;
    }
  }
}

console.log(output);
