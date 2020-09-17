// Strings - template literals

let firstName = 'Rupak';
let lastName = 'Lama';
const dob = 1985;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  'This is ' +
    firstName +
    ' ' +
    lastName +
    '.' +
    ' He is ' +
    calcAge(dob) +
    ' years old.'
);

// ES6 - back ticks
console.log(
  `This is ${firstName} ${lastName}. He is ${calcAge(dob)} years old`
);

// new string methods
const n = `${firstName} ${lastName}`;
console.log(n)
console.log(n.startsWith('R'));
console.log(n.endsWith('ma'));
console.log(n.includes('ak'));

console.log(`${firstName} `.repeat(5));