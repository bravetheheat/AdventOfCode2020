const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into Array of numbers
const data = file
  .split('\n')
  .filter((e) => !!e)
  .map((l) => {
    const [limits, charWithColon, password] = l.split(' ');
    const char = charWithColon.replace(':', '');
    const [pos1, pos2] = limits.split('-');

    return {
      pos1,
      pos2,
      char,
      password: password.replace('\r', ''),
    };
  });

let num = 0;
data.forEach(({ pos1, pos2, char, password }) => {
  const pass1 = password.charAt(pos1 - 1) === char;
  const pass2 = password.charAt(pos2 - 1) === char;
  if (pass1 ^ pass2) num++;
});

console.log(num);
