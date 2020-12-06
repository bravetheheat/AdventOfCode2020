const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'UTF-8');

// Read data into blocks
const blocks = file.split('\n\r\n').filter((e) => !!e);

const fields = [
  (str) => {
    let valid = false;
    const re = new RegExp('^(?:byr:)(19[2-9][0-9]|200[0-2])$');
    const match = re.exec(str);
    if (match) valid = true;
    return valid;
  },
  (str) => {
    const re = new RegExp('^(?:iyr:)(201[0-9]|2020)$');
    if (re.exec(str)) return true;
    return false;
  },
  (str) => {
    const re = new RegExp('^(?:eyr:)(202[0-9]|2030)$');
    if (re.exec(str)) return true;
    return false;
  },

  (str) => {
    let valid = false;
    const re1 = new RegExp('^(?:hgt:)(1[5-8][0-9]|19[0-3])(cm)$');
    if (re1.exec(str)) valid = true;
    const re2 = new RegExp('^(?:hgt:)(59|6[0-9]|7[0-6])(in)$');
    if (re2.exec(str)) valid = true;
    return valid;
  },

  (str) => {
    const re = new RegExp('^(?:hcl:)(#[0-9a-f]{6})$');
    if (re.exec(str)) return true;

    return false;
  },

  (str) => {
    const re = new RegExp('^(?:ecl:)(amb|blu|brn|gry|grn|hzl|oth)$');
    if (re.exec(str)) return true;
    return false;
  },

  (str) => {
    const re = new RegExp('^(?:pid:)([0-9]{9})$');
    if (re.exec(str)) return true;

    return false;
  },
  (str) => true,
];

let numValid = 0;

for (const i in blocks) {
  const block = blocks[i];
  const missingFields = [];
  const parts = block.split(/\s/);
  for (const y in fields) {
    const field = fields[y];
    let found = false;
    for (const z in parts) {
      const part = parts[z];
      if (field(part)) found = true;
    }

    if (!found) missingFields.push(field);
  }

  if (missingFields.length === 0) {
    numValid++;
  }
}

console.log(numValid);
