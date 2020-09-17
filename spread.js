// spread operator - ...

function addFourAges(a, b, c, d) {
  return a + b+ c + d;
}

var sum1 = addFourAges(18,30, 12, 21)
console.log(sum1)

// imagine we have these four numbers in an array instead of variables,
// how can we pass that array into this function as arguments

// ES5
var ages = [18, 30, 12, 21];
// apply method to apply elements as args to func
var sum2 = addFourAges.apply(null, ages)
console.log(sum2)

// ES6
const sum3 = addFourAges(...ages)
console.log(sum3)

// joining arrays
const familyLama = ['Rupak', 'Indira', 'Pandu'];
const familyRai = ['Mummy', 'Cinol', 'Bikash'];

const bigFamily = [...familyLama, 'newChild', ...familyRai];
console.log(bigFamily)

// NodeList is what querySelectorAll returns
// which is a list of elements matching the specified group of selectors
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box')
const all = [h, ...boxes];

// convert NodeList to array with from()
Array.from(all).forEach(el => el.style.color = 'purple');
