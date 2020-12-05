const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into Array of numbers
const data = file
  .split('\n')
  .filter((e) => !!e)
  .map((l) => {
    const [limits, charWithColon, password] = l.split(' ');
    const char = charWithColon.replace(':', '');
    const [lowerLimit, higherLimit] = limits.split('-');

    return {
      lowerLimit,
      higherLimit,
      char,
      password: password.replace('\r', ''),
    };
  });

let num = 0;
data.forEach(({ lowerLimit, higherLimit, char, password }) => {
  let occurences = 0;
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === char) occurences++;
  }
  if (occurences >= lowerLimit && occurences <= higherLimit) num++;
});

console.log(num);
