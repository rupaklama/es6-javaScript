// destructuring gives us very convenient way to extract data or store data 
// into a single variable from data structure like object & array

// ES5
var john = ['John', 26];

// storing each data to variable
// var name = john[0]
// var age = john[1]

// Imagine we have lots of elements in array, doing above can be hard
// ES6
// This will create const name & const year variables with respective values
// Destructuring is the opposite of constructing data structure

// array
const [name, age] = ['John', 26];
console.log(name, age)

// object
const obj = {
  firstName: 'Rupak',
  lastName: 'Lama'
}

// Destructuring variables has to match the object's keys
const { firstName, lastName } = obj;
console.log( firstName, lastName);

// can also use different names
const {firstName: a, lastName: b} = obj;
console.log(a, b)

// Easier way to return multiple values from a function
function calcAge(year) {
  const age = new Date().getFullYear() - year;
  return [age, 66 - age]
}
// using Destructuring to store values into different variables
const [age2, retirement] = calcAge(1985);
console.log(age2, retirement)
