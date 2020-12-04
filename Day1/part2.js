const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into Array of numbers
const data = file
  .split('\n')
  .filter((e) => !!e)
  .map((i) => Number(i));

const sortedNums = data.sort((a, b) => a - b);

let x = 0;
let z = sortedNums.length - 1;
let y;

const goal = 2020;

const finderFunc = () => {
  for (; x < z; x++) {
    const num1 = sortedNums[x];

    for (; x < z; z--) {
      const num2 = sortedNums[z];

      if (num1 + num2 > 2020) continue;

      for (y = x + 1; y < z; y++) {
        const num3 = sortedNums[y];
        const sum = num1 + num2 + num3;
        if (sum === goal) {
          return num1 * num2 * num3;
        }
        if (sum > goal) {
          break;
        }
      }
    }
    z = sortedNums.length - 1;
  }
};

const found = finderFunc();

console.log(found);
