const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into Array of numbers
const data = file
  .split('\n')
  .filter((e) => !!e)
  .map((i) => Number(i));

const sortedNums = data.sort((a, b) => a - b);

let x;
let z;
let entry1;
let entry2;

for (x = 0, z = sortedNums.length - 1; x < z; ) {
  const num1 = sortedNums[x];
  const num2 = sortedNums[z];

  // Assumes num1 and num2 are both less than 2020
  const sum = num1 + num2;

  if (sum > 2020) z--;
  if (sum < 2020) x++;
  if (sum === 2020) {
    entry1 = num1;
    entry2 = num2;
    break;
  }
}

console.log(entry1 * entry2);
