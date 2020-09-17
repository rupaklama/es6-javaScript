// arrow functions

const years = [1990, 1985, 1987];

// ES5 with callback func
var ages5 = years.map(function(el) {
  return 2020 - el;
})
console.log(ages5);

// ES6 with callback func with no function & return keywords
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`
})