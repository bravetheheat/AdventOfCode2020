const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into lines
let lines = file.split('\n').filter((e) => !!e);
lines = lines.map((lineStr) => {
  const line = [];
  for (let i = 0; i < lineStr.length; i++) {
    const char = lineStr.charAt(i);
    if (char === '.') line.push(false);
    if (char === '#') line.push(true);
  }
  return line;
});

const xLength = lines[0].length - 1;

const findNumTreesEncountered = (slopeX, slopeY) => {
  let numTreesEncountered = 0;

  // Start from the top-left corner
  let curY = 0;
  let curX = 0;

  for (; curY < lines.length; curY += slopeY) {
    // Increment number of trees encountered if position is true
    if (lines[curY][curX]) numTreesEncountered++;

    curX += slopeX;
    if (curX > xLength) curX = curX - xLength - 1;
  }
  return numTreesEncountered;
};

const a = findNumTreesEncountered(1, 1);
const b = findNumTreesEncountered(3, 1);
const c = findNumTreesEncountered(5, 1);
const d = findNumTreesEncountered(7, 1);
const e = findNumTreesEncountered(1, 2);

console.log(a * b * c * d * e);
